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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-zinc-800/50 backdrop-blur-md bg-zinc-950/80">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="font-semibold tracking-tighter text-white text-base">NEW HOMES ALBERTA</span>
<span className="text-[9px] text-blue-400 uppercase tracking-widest font-mono">Development Advisory</span>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-xs font-medium bg-white text-zinc-950 px-4 py-2 rounded hover:bg-zinc-200 transition-colors" href="#apply">
                    Client Portal
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 border-b border-zinc-800">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-8 tracking-wide">
<span className="text-blue-400"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></span>
                EXTENSION OF NEW HOMES ALBERTA
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">
                Your Fractional <br/>
<span className="text-zinc-500">Development Team.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                We are not a fund. You own the land. You own the title. <br className="hidden md:block"/>
                We provide the blueprint, the team, and the execution to build institutional-grade multifamily assets in Alberta.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-medium rounded text-sm hover:bg-blue-500 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20" href="#breakdown">
                    View Our Strategy
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-zinc-700 text-white font-medium rounded text-sm hover:bg-zinc-900 transition-all text-center" href="#personal">
                    Why Work With Us?
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-800 bg-zinc-900/10" id="personal">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-start md:items-center gap-10">

<div className="relative group flex-shrink-0 mx-auto md:mx-0">
<div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>

<img alt="Joshua Clark" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-zinc-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-zinc-950 border border-zinc-800 p-2 rounded-full text-blue-500">
<iconify-icon icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-sm font-mono text-blue-500 mb-2">A NOTE FROM THE FOUNDER</h3>
<h2 className="text-2xl font-medium text-white tracking-tight mb-6">Why I expanded New Homes Alberta into Advisory</h2>
<div className="prose prose-invert prose-zinc text-zinc-400 leading-relaxed space-y-4 text-sm md:text-base">
<p>
                            At <strong>New Homes Alberta</strong>, we've always been about connecting people with property. But for years, I saw sophisticated investors frustrated by opaque real estate funds. They wanted the returns of development without losing control of their capital.
                        </p>
<p>
                            I built this advisory arm to solve that. I realized our clients don't just want a return; they want <em>ownership</em>. They want the depreciation benefits, the equity lift, and the refinancing power that comes with holding the title directly.
                        </p>
<p>
                            Development is hard—zoning, permitting, construction. That's where my team comes in. We act as your "Owner's Rep." We handle the headaches; you hold the asset.
                        </p>
<div className="pt-6 flex flex-col md:flex-row items-center md:items-center gap-4 justify-center md:justify-start">
<div className="h-px bg-zinc-800 w-12 hidden md:block"></div>
<div className="flex flex-col">
<span className="text-white font-medium text-sm">Joshua Clark</span>
<span className="text-zinc-500 text-xs">Founder, New Homes Alberta</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-800" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">The NHA Difference</h2>
<p className="text-zinc-500 mt-2">Consultancy vs. Traditional GP/LP Structures</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-16">

<div className="p-8 rounded border border-zinc-800 bg-zinc-950/50 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 mb-6 text-zinc-500">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm uppercase tracking-widest font-medium">Traditional Fund</span>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-between pb-3 border-b border-zinc-800">
<span className="text-zinc-400 text-sm">Asset Ownership</span>
<span className="text-zinc-600 text-sm">Fund owns it, you own shares</span>
</li>
<li className="flex items-center justify-between pb-3 border-b border-zinc-800">
<span className="text-zinc-400 text-sm">Tax Benefits</span>
<span className="text-zinc-600 text-sm">Diluted or retained by GP</span>
</li>
<li className="flex items-center justify-between pb-3 border-b border-zinc-800">
<span className="text-zinc-400 text-sm">Control</span>
<span className="text-zinc-600 text-sm">Zero</span>
</li>
<li className="flex items-center justify-between">
<span className="text-zinc-400 text-sm">Profit Split</span>
<span className="text-zinc-600 text-sm">Usually 70/30 or 80/20 split</span>
</li>
</ul>
</div>

<div className="p-8 rounded border border-blue-900 bg-blue-900/10 relative">
<div className="absolute -top-3 -right-3 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/20">
                        Recommended
                    </div>
<div className="flex items-center gap-3 mb-6 text-blue-400">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm uppercase tracking-widest font-medium">NHA Advisory</span>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-between pb-3 border-b border-zinc-800">
<span className="text-white text-sm">Asset Ownership</span>
<span className="text-blue-400 text-sm font-medium">100% You (Title Holder)</span>
</li>
<li className="flex items-center justify-between pb-3 border-b border-zinc-800">
<span className="text-white text-sm">Tax Benefits</span>
<span className="text-blue-400 text-sm font-medium">100% Yours (CCA/Depreciation)</span>
</li>
<li className="flex items-center justify-between pb-3 border-b border-zinc-800">
<span className="text-white text-sm">Control</span>
<span className="text-blue-400 text-sm font-medium">You approve major milestones</span>
</li>
<li className="flex items-center justify-between">
<span className="text-white text-sm">Cost Structure</span>
<span className="text-blue-400 text-sm font-medium">Flat Fee + Performance</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-800" id="breakdown">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Case Study: Project "Vantage"</h2>
<p className="text-zinc-500 mt-2">A 12-Unit Purpose-Built Rental in Edmonton, AB</p>
</div>
<div className="text-right flex items-center gap-3">
<div className="text-right">
<div className="text-[10px] text-zinc-500 uppercase">Consultancy Role</div>
<div className="text-sm text-white">Full Cycle Mgmt</div>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:crown-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl relative">

<div className="absolute top-0 right-0 bg-blue-900/30 border-l border-b border-blue-900 text-blue-400 text-[10px] px-4 py-2 rounded-bl-lg font-mono">
                    CLIENT RETAINED 100% EQUITY
                </div>

<div className="grid grid-cols-2 md:grid-cols-4 border-b border-zinc-800 divide-x divide-zinc-800">
<div className="p-6">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Time to Stabilize</div>
<div className="text-xl text-white font-medium">14 Mos</div>
<div className="text-xs text-zinc-600 mt-1">Permit to Rent</div>
</div>
<div className="p-6">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Cost</div>
<div className="text-xl text-white font-medium">$3.8M</div>
<div className="text-xs text-zinc-600 mt-1">Land + Build + Fees</div>
</div>
<div className="p-6">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">End Value</div>
<div className="text-xl text-blue-400 font-mono font-medium">$4.4M</div>
<div className="text-xs text-zinc-600 mt-1">Bank Appraisal</div>
</div>
<div className="p-6">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Client ROI</div>
<div className="text-xl text-white font-mono font-medium">Infinite</div>
<div className="text-xs text-zinc-600 mt-1">Post-Refinance</div>
</div>
</div>

<div className="p-8">
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-zinc-500" icon="solar:info-square-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
<strong className="text-white">The Situation:</strong> Our client, a busy physician, wanted to deploy $200k into real estate but didn't have time to manage contractors. <br/><br/>
<strong className="text-white">NHA's Role:</strong> We sourced the land off-market, managed the re-zoning, hired the architect, vetted the builder, and oversaw the entire construction process. Upon completion, we facilitated the CMHC MLI Select financing.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-800">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-12">Advisory Services</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 border border-zinc-800 rounded hover:border-blue-900/50 transition-colors bg-zinc-950">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Acquisition Strategy</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                        We identify high-potential land in Alberta suited specifically for CMHC financing criteria. We run the proformas before you make an offer.
                    </p>
</div>

<div className="group p-6 border border-zinc-800 rounded hover:border-blue-900/50 transition-colors bg-zinc-950">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:hammer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Development Management</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Full-service oversight. We handle the RFPs, contractor selection, city permitting, and draw requests on your behalf.
                    </p>
</div>

<div className="group p-6 border border-zinc-800 rounded hover:border-blue-900/50 transition-colors bg-zinc-950">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:banknote-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Financial Structuring</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Optimizing for the CMHC MLI Select program to ensure maximum loan-to-value (up to 95%) and amortization periods (up to 50 years).
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="apply">
<div className="max-w-xl mx-auto border border-zinc-800 bg-zinc-900/20 p-8 md:p-12 rounded-2xl text-center">
<div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-4">
                Let's Discuss Your Project
            </h2>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                We take on a limited number of advisory clients per quarter to ensure focused execution.
            </p>
<form className="space-y-4 text-left" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5">Full Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700" placeholder="Joshua Clark" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5">Email Address</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700" placeholder="joshua@newhomesalberta.ca" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5">Investment Capacity</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
<option>$200k - $500k</option>
<option>$500k - $1M</option>
<option>$1M+</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded text-sm hover:bg-zinc-200 transition-colors mt-2">
                    Request Consultation
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white">
<iconify-icon icon="solar:home-smile-linear" width="12"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-zinc-500 text-sm">NEW HOMES ALBERTA</span>
</div>
<p className="text-[10px] text-zinc-600 max-w-xs leading-relaxed">
                    New Homes Alberta Development Advisory helps investors build wealth through direct ownership of multifamily assets. We act as consultants, not fund managers.
                </p>
</div>
<div className="flex gap-12">
<div>
<h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Office</h4>
<p className="text-xs text-zinc-400">Edmonton, Alberta<br/>Canada</p>
</div>
<div>
<h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Legal</h4>
<p className="text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
<p className="text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors mt-1">Terms of Service</p>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-900 text-[10px] text-zinc-700 text-center">
            © 2024 New Homes Alberta. All rights reserved.
        </div>
</footer>

    </>
  );
}
