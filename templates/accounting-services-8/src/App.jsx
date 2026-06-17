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
      

<main className="w-full max-w-7xl bg-white rounded-2xl shadow-md overflow-hidden ring-1 ring-slate-900/5 relative">

<nav className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Ledger</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
<a className="hover:text-slate-900 transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm" href="#">
                    Client Portal
                </a>
</div>
</nav>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 px-6 py-12 lg:py-20 lg:px-16 items-center">

<div className="max-w-xl">
<div className="inline-flex gap-2 text-xs font-medium text-blue-600 bg-blue-50 border-blue-100 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
  Accepting new clients for Q4
</div>
<h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.15]">
                    Financial clarity for 
                    <span className="text-slate-400">modern ambitious teams.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 font-light">
                    Move beyond spreadsheets. We provide real-time bookkeeping, tax strategy, and CFO services designed for high-growth startups and digital agencies.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="p-1 rounded bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
                        Audit-proof books
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="p-1 rounded bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
                        Tax advisory
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="p-1 rounded bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
                        Payroll management
                    </div>
</div>
<div className="pt-8 border-t border-slate-100 flex items-center gap-6">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Trusted by</p>
<div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter flex items-center gap-1"><iconify-icon icon="lucide:hexagon" width="18"></iconify-icon> ACME</span>
<span className="text-lg font-bold tracking-tighter flex items-center gap-1"><iconify-icon icon="lucide:triangle" width="18"></iconify-icon> VERTEX</span>
<span className="text-lg font-bold tracking-tighter flex items-center gap-1"><iconify-icon icon="lucide:circle" width="18"></iconify-icon> SPHERE</span>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="sm:p-8 bg-white z-10 border-slate-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="mb-6">
<h3 className="text-xl font-medium tracking-tight text-slate-900">Get a free consultation</h3>
<p className="text-sm text-slate-500 mt-1">Our experts will analyze your current setup.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">First name</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none transition-all placeholder:text-slate-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Last name</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Work Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-9 p-2.5 outline-none transition-all placeholder:text-slate-400" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Monthly Revenue</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none transition-all appearance-none cursor-pointer">
<option>Pre-revenue</option>
<option>$1k - $10k</option>
<option>$10k - $50k</option>
<option>$50k+</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-start mb-4 pt-2">
<input className="custom-checkbox w-4 h-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 bg-slate-50 cursor-pointer mt-0.5" id="terms" type="checkbox"/>
<label className="ml-2 text-xs font-medium text-slate-500 leading-tight" htmlFor="terms">I agree to the processing of my personal data.</label>
</div>
<button className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none transition-all shadow-sm flex items-center justify-center gap-2" type="button">
                            Book Assessment
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<section className="bg-slate-50 border-y border-slate-100 py-16 px-6 lg:px-16 overflow-hidden">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Everything in one place</h2>
<p className="text-slate-500 font-light">We integrate with your existing stack to provide a unified view of your financial health.</p>
</div>
<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-1">
<div className="bg-slate-50/50 rounded-lg border border-slate-100 p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 font-medium mb-1">Total Revenue</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">$124,500.00</div>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-1.5 py-0.5 rounded">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
                                +12.5%
                            </div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 font-medium mb-1">Expenses</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">$42,100.00</div>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500 bg-slate-100 w-fit px-1.5 py-0.5 rounded">
<iconify-icon icon="lucide:minus" width="12"></iconify-icon>
                                2.1%
                            </div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 font-medium mb-1">Net Profit</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">$82,400.00</div>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-1.5 py-0.5 rounded">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
                                +18.2%
                            </div>
</div>
</div>
<div className="h-32 w-full flex items-end justify-between gap-2 opacity-80">
<div className="w-full bg-blue-500/10 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-blue-500/30 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-blue-500/40 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-blue-500/50 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-blue-500/60 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-blue-500 rounded-t-sm h-[90%]"></div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-16 border-b border-slate-100">
<div className="mb-12">
<span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">Our Expertise</span>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Comprehensive financial solutions</h2>
<p className="text-slate-500 font-light mt-2 max-w-xl">From daily compliance to strategic advisory, we cover the full spectrum of your financial needs.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:shadow-sm transition-all group">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shadow-sm border border-blue-200">
<iconify-icon icon="lucide:file-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Compliance &amp; Core</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Tax Preparation &amp; Planning</span>
<span className="text-xs text-slate-500">Including High Net Worth planning &amp; Multi-State filings.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Business Tax Preparation</span>
<span className="text-xs text-slate-500">LLC, S-Corp, C-Corp, and Partnership returns.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Bookkeeping &amp; Month-End Close</span>
<span className="text-xs text-slate-500">Accurate, timely financial statements every month.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Payroll &amp; Sales Tax</span>
<span className="text-xs text-slate-500">Full oversight of payroll processing and sales tax compliance.</span>
</div>
</li>
</ul>
</div>

<div className="p-8 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-all group">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Strategic Advisory</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<div className="">
<span className="block text-sm font-medium text-slate-900" style={{}}>Outsourced Fractional CFO</span>
<span className="text-xs text-slate-500">High-level strategy without the full-time executive cost.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<div className="">
<span className="text-sm font-medium text-slate-900 block">Cash Flow Forecasting</span>
<span className="text-xs text-slate-500">Predict runway and manage capital efficiency.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Business Entity Formation</span>
<span className="text-xs text-slate-500">Expert guidance on LLC vs S-Corp selection and setup.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">IRS Representation</span>
<span className="text-xs text-slate-500">Tax resolution and audit defense services.</span>
</div>
</li>
</ul>
</div>

<div className="p-8 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-all group">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Industry Specialized</h3>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-xs font-semibold text-slate-900 block mb-1">Real Estate</span>
<span className="text-[10px] text-slate-500 leading-tight block">Cost segregation, 1031 exchanges, and portfolio analysis.</span>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-xs font-semibold text-slate-900 block mb-1">Medical &amp; Dental</span>
<span className="text-[10px] text-slate-500 leading-tight block">Practice benchmarking and revenue cycle management.</span>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-xs font-semibold text-slate-900 block mb-1">Construction</span>
<span className="text-[10px] text-slate-500 leading-tight block">WIP schedules, job costing, and contractor compliance.</span>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-xs font-semibold text-slate-900 block mb-1">Tech &amp; SaaS</span>
<span className="text-[10px] text-slate-500 leading-tight block">R&amp;D tax credits, burn rate analysis, and KPI tracking.</span>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 sm:col-span-2">
<span className="text-xs font-semibold text-slate-900 block mb-1">Non-Profit / Exempt</span>
<span className="text-[10px] text-slate-500 leading-tight block">Form 990 preparation and grant compliance monitoring.</span>
</div>
</div>
</div>

<div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:shadow-sm transition-all group">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 shadow-sm border border-slate-200">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Technology &amp; Setup</h3>
</div>
<div className="space-y-6">
<div>
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-slate-900">QuickBooks / Xero Cleanup</h4>
<iconify-icon className="text-slate-400" icon="lucide:wrench" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                                Professional setup and training to fix messy data. We optimize your chart of accounts for clarity and accuracy.
                            </p>
</div>
<div className="h-px bg-slate-200 w-full"></div>
<div>
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-slate-900">Tech Stack Implementation</h4>
<iconify-icon className="text-slate-400" icon="lucide:layers" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                                We implement modern tools like Expensify, Bill.com, and Gusto to automate your back office workflow.
                            </p>
</div>
<div className="pt-4 mt-auto">
<a className="inline-flex items-center text-xs font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
                                View supported integrations <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-16 border-b border-slate-100 bg-white">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">Local Presence</span>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Serving the Greater Los Angeles Area</h2>
<p className="text-slate-500 font-light mb-6 text-sm">
                        While we operate digitally, we maintain dedicated offices to serve our local clients with in-person strategy sessions and audit representation.
                    </p>
<div className="flex items-start gap-4 mb-6">
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-400">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Pasadena Office</h4>
<p className="text-xs text-slate-500 mt-1">100 E Colorado Blvd, Pasadena, CA 91105+1 (626) 555-0123</p>
<a className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-2 inline-flex items-center gap-1" href="#">
                                View location page <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Serving Clients In:</h4>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">Pasadena</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">Glendale</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">Burbank</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">Arcadia</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">Downtown LA</span>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
<h3 className="text-sm font-medium text-slate-900 mb-4">Specialized Local Services</h3>
<p className="text-xs text-slate-500 mb-6">Explore our dedicated service offerings tailored for local compliance and industries.</p>
<div className="grid sm:grid-cols-2 gap-3">
<a className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-600">Tax Preparation in Pasadena</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-400" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-600">Bookkeeping Services Glendale</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-400" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-600">IRS Audit Representation LA</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-400" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-600">Tech Startup CPA Burbank</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-400" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-16 border-b border-slate-100">
<div className="mb-12">
<span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">The Team</span>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Expertise you can trust</h2>
<p className="text-slate-500 font-light mt-2 max-w-xl">Our partners bring decades of experience from Big 4 firms and are fully credentialed.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex items-start gap-4">
<img alt="Partner" className="w-16 h-16 rounded-xl object-cover grayscale opacity-90 border border-slate-200" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<h3 className="text-base font-medium text-slate-900">Thomas Vance</h3>
<span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">CPA</span>
</div>
<p className="text-xs font-medium text-blue-600 uppercase tracking-wide mt-0.5 mb-2">Managing Partner</p>
<p className="text-sm text-slate-500 leading-relaxed">
                            Former Director at Deloitte. Specializes in M&amp;A strategy and international tax compliance.
                        </p>
</div>
</div>

<div className="flex items-start gap-4">
<img alt="Partner" className="w-16 h-16 rounded-xl object-cover grayscale opacity-90 border border-slate-200" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<h3 className="text-base font-medium text-slate-900">Sarah Chen</h3>
<span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">CFA</span>
</div>
<p className="text-xs font-medium text-blue-600 uppercase tracking-wide mt-0.5 mb-2">Head of Advisory</p>
<p className="text-sm text-slate-500 leading-relaxed">
                            Ex-CFO of a Series B Fintech. Expert in SaaS metrics, fundraising, and financial modeling.
                        </p>
</div>
</div>

<div className="flex items-start gap-4">
<img alt="Partner" className="w-16 h-16 rounded-xl object-cover grayscale opacity-90 border border-slate-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<h3 className="text-base font-medium text-slate-900">David Miller</h3>
<span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">EA</span>
</div>
<p className="text-xs font-medium text-blue-600 uppercase tracking-wide mt-0.5 mb-2">Tax Partner</p>
<p className="text-sm text-slate-500 leading-relaxed">
                            Enrolled Agent with 15 years experience helping startups navigate R&amp;D credits and IRS representation.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-16 px-6 lg:px-16 border-b border-slate-100">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Loved by founders</h2>
<p className="text-slate-500 font-light">Join the companies that have scaled from seed to exit with us.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
<div className="text-blue-200 absolute top-6 right-6">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<div className="mb-4">
<div className="flex text-amber-400 gap-0.5 mb-2 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed relative z-10">
                            "Ledger &amp; Co. fundamentally changed how we operate. Their real-time dashboards give us the confidence to make big decisions quickly."
                        </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-slate-50">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">EL</div>
<div>
<p className="text-xs font-semibold text-slate-900">Elena Rodriguez</p>
<p className="text-[10px] text-slate-400">CEO, Nexus AI</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
<div className="text-blue-200 absolute top-6 right-6">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<div className="mb-4">
<div className="flex text-amber-400 gap-0.5 mb-2 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed relative z-10">
                            "The fractional CFO service is a game changer. It feels like having a senior finance partner on the team for a fraction of the cost."
                        </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-slate-50">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">MJ</div>
<div>
<p className="text-xs font-semibold text-slate-900">Marcus Johnson</p>
<p className="text-[10px] text-slate-400">Founder, Stacked</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative md:col-span-2 lg:col-span-1">
<div className="text-blue-200 absolute top-6 right-6">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<div className="mb-4">
<div className="flex text-amber-400 gap-0.5 mb-2 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed relative z-10">
                            "We switched from a traditional firm and the difference is night and day. The tech-first approach saves us 10+ hours a month."
                        </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-slate-50">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">AK</div>
<div>
<p className="text-xs font-semibold text-slate-900">Anna Kim</p>
<p className="text-[10px] text-slate-400">COO, Swift Logistics</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-6 mb-16 lg:mx-16 bg-slate-900 rounded-xl px-6 py-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden mt-8">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 max-w-lg">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2">Ready to streamline your finances?</h2>
<p className="text-slate-400 font-light">Join 500+ fast-growing companies that trust Ledger &amp; Co.</p>
</div>
<div className="relative z-10 flex gap-4 w-full md:w-auto">
<button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 whitespace-nowrap w-full md:w-auto">
                    Get Started
                </button>
<button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap w-full md:w-auto">
                    View Demo
                </button>
</div>
</section>

<footer className="border-t border-slate-100 px-6 py-10 lg:px-16 bg-white">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:activity" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">Ledger</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Modern accounting infrastructure for the internet economy.
                    </p>

<div className="space-y-2">
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Certifications</p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 rounded border border-slate-100 bg-slate-50 text-slate-600" title="AICPA Member">
<iconify-icon icon="lucide:award" width="14"></iconify-icon>
<span className="text-[10px] font-semibold">AICPA</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded border border-slate-100 bg-slate-50 text-slate-600" title="State Society">
<iconify-icon icon="lucide:shield" width="14"></iconify-icon>
<span className="text-[10px] font-semibold">CalCPA</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded border border-slate-100 bg-slate-50 text-slate-600" title="Chamber of Commerce">
<iconify-icon icon="lucide:building-2" width="14"></iconify-icon>
<span className="text-[10px] font-semibold">Chamber</span>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">Bookkeeping</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">Tax Filing</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">CFO Services</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">About</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">Privacy</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">Terms</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-500 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-6">
<p className="text-xs text-slate-400">© 2023 Ledger &amp; Co. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
