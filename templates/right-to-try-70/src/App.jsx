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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#007F73] flex items-center justify-center text-white shadow-lg shadow-[#007F73]/20">
<svg className="lucide lucide-dna w-6 h-6 stroke-[1.5]" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-slate-900 uppercase font-geist">Perinatal</div>
<div className="text-xs font-medium text-slate-500 tracking-wider uppercase font-geist">Stem Cell Society</div>
</div>
</div>
<div className="hidden xl:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#007F73] transition-colors font-geist" href="#">Who We Are</a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#007F73] transition-colors font-geist" href="#">Sponsor A Vet</a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#007F73] transition-colors font-geist" href="#">Vets Apply Here</a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#007F73] transition-colors font-geist" href="#">Our Plan</a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#007F73] transition-colors font-geist" href="#">Conferences</a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#007F73] transition-colors font-geist" href="#">Contact</a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#007F73] transition-colors font-geist" href="#">Types of Stem Cells</a>
<a className="px-4 py-2 text-sm font-medium text-[#007F73] bg-[#007F73]/5 rounded-full transition-colors font-geist" href="#">Right to Try</a>
</div>
<button className="xl:hidden text-slate-600">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full pt-32 pb-20 px-6">
<div className="max-w-[1400px] mx-auto">
<div className="relative w-full h-[60vh] rounded-[2.5rem] overflow-hidden group">
<img alt="Lady Justice Scales" className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
<div className="absolute inset-0 w-full h-full">
<img alt="Law Rights Theme" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-green-200/90 via-green-200/20 to-transparent absolute inset-0 text-black"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col items-center text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-4xl shadow-sm font-geist font-semibold">
                        The Right to Try is Every American’s Birth Right
                    </h1>
</div>
</div>
</div>
</header>

<main className="max-w-5xl mx-auto px-6 pb-32">

<div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 mb-16 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#007F73]"></div>
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007F73]/10 text-[#007F73] text-xs font-semibold uppercase tracking-wider font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007F73] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#007F73]"></span>
</span>
                    May 2025 Update
                </span>
<span className="text-sm font-medium text-slate-400 font-geist">Senate Bill 535 Enacted</span>
</div>
<h2 className="md:text-4xl leading-tight text-3xl font-semibold text-slate-900 tracking-tight font-geist mb-8">
                Montana Changes Right to Try Law to Include Perinatal 1st and 2nd Changes
            </h2>
<div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
<p className="font-geist">
                    Montana’s newly enacted Senate Bill 535 (SB 535), signed into law by Governor Greg Gianforte in May 2025, significantly expands the state's "Right to Try" legislation and includes the Perinatal Society’s top two recommended changes to the Bill. <strong className="text-slate-900 font-medium font-geist">This is a huge step forward to bringing stem cell therapy to everyone in the United States.</strong>
</p>
<p className="font-geist">
                    This law permits healthcare providers to offer experimental treatments that have completed only Phase I clinical trials, bypassing the traditional FDA approval process.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-6 mt-12">
<div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-[#007F73]/30 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#007F73] shadow-sm mb-4 border border-slate-100">
<svg className="lucide lucide-check-circle-2 w-6 h-6 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist">Expanded Eligibility</h3>
<p className="text-base text-slate-600 leading-relaxed font-geist">
                        The patient no longer needs to be terminally ill but rather <span className="text-[#007F73] font-medium font-geist">anyone who has exhausted other avenues</span> can utilize this law and try any drug that has completed a Phase I clinical trial.
                    </p>
</div>
<div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-[#007F73]/30 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#007F73] shadow-sm mb-4 border border-slate-100">
<svg className="lucide lucide-dollar-sign w-6 h-6 stroke-[1.5]" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist">Direct Negotiation</h3>
<p className="text-base text-slate-600 leading-relaxed font-geist">
                        Companies can now negotiate directly with the client and sell the drug for a profit. This creates immediate market incentives after proving safety in Phase I.
                    </p>
</div>
</div>
<div className="mt-10 p-6 bg-[#007F73]/5 rounded-xl border border-[#007F73]/10 flex gap-4 items-start">
<svg className="lucide lucide-quote w-8 h-8 text-[#007F73] fill-[#007F73]/10 shrink-0 mt-1" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div className="">
<p className="text-lg font-medium text-[#007F73] italic leading-relaxed font-geist">
                        "In my opinion, this will revolutionize the stem cell field because now after completing a Phase I Clinical trial to prove the safety of the drug, a company now has a market to make a profit from the sale of the drug."
                    </p>
</div>
</div>
<div className="mt-10 flex items-center gap-2 text-base text-slate-500">
<span className="font-geist">We commend the State of Montana, Senator Ken Bogner, and Governor Greg Gianforte.</span>
<a className="text-[#007F73] hover:underline font-medium inline-flex items-center gap-1 font-geist" href="#">
                    Read the full Bill <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="mb-24">
<div className="flex items-center gap-4 mb-8">
<div className="h-px bg-slate-200 flex-1"></div>
<h3 className="text-lg font-medium text-slate-400 uppercase tracking-widest text-center font-geist">Future Goals &amp; Context</h3>
<div className="h-px bg-slate-200 flex-1"></div>
</div>
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="text-lg text-slate-600 leading-relaxed font-geist">
                    The Perinatal Society recommends two more changes to be adopted in other states. Currently, 12 additional states are considering similar Right to Try Law improvements.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative group">
<div className="absolute -top-3 left-8 px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-wide border border-slate-200 rounded-full font-geist">
                        Proposal #3
                    </div>
<h4 className="text-xl font-semibold text-slate-900 mb-4 mt-2 group-hover:text-[#007F73] transition-colors font-geist">Phase II &amp; III Data Inclusion</h4>
<p className="text-lg text-slate-600 leading-relaxed font-geist">
                        Patients who access the drug via Right to Try should be included in official Phase II and Phase III clinical trial data sets. This would enable companies to fund the rest of the clinical trial with Right to Try Patient financing.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative group">
<div className="absolute -top-3 left-8 px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-wide border border-slate-200 rounded-full font-geist">
                        Proposal #4
                    </div>
<h4 className="text-xl font-semibold text-slate-900 mb-4 mt-2 group-hover:text-[#007F73] transition-colors font-geist">Remove $1M FDA Fee</h4>
<p className="text-lg text-slate-600 leading-relaxed font-geist">
                        Removing the $1,000,000 fee to file a Phase I Clinical Trial with the FDA would allow more companies to enter the market. Competition for indications like knee injections would lower costs dynamically.
                    </p>
</div>
</div>
</div>

<section className="space-y-16">
<div className="space-y-6">
<h3 className="text-2xl text-slate-900 tracking-tight font-geist font-semibold">Legislative Background</h3>
<p className="text-lg text-slate-600 leading-relaxed font-geist">
                    On May 22, 2018, President Donald Trump signed the Right to Try Act into federal law. While an attempt to provide life-saving approaches, the Perinatal Stem Cell Society and its President, Kyle Cetrulo, believe the original form had major flaws that limited patient access.
                </p>
<p className="text-lg text-slate-600 leading-relaxed font-geist">
                    Below are the specific detailed proposed changes championed by the Society to revolutionize access.
                </p>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div className="p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="text-[#007F73] font-semibold text-sm uppercase tracking-wide mb-1 font-geist">Proposed Change #1</div>
<h4 className="text-xl font-semibold text-slate-900 font-geist">Patient Eligibility Reform</h4>
</div>
<svg className="lucide lucide-users w-6 h-6 text-slate-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="p-8 grid lg:grid-cols-2 gap-12">
<div className="space-y-4">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-geist">Current Status</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-slate-500">
<svg className="lucide lucide-x w-5 h-5 text-red-400 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Patient must have a  or "life-threatening" condition.</span>
</li>
<li className="flex items-start gap-3 text-base text-slate-500">
<svg className="lucide lucide-x w-5 h-5 text-red-400 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Strictly limited to conditions defined in various state bills (S. 204, SB 422).</span>
</li>
<li className="flex items-start gap-3 text-base text-slate-500">
<svg className="lucide lucide-x w-5 h-5 text-red-400 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Considered all FDA-approved treatments exhausted.</span>
</li>
</ul>
</div>
<div className="space-y-4">
<div className="text-xs font-semibold text-[#007F73] uppercase tracking-widest font-geist">Proposed &amp; Adopted (MT)</div>
<div className="bg-[#007F73]/5 p-6 rounded-xl border border-[#007F73]/10">
<p className="text-lg font-medium text-slate-900 leading-relaxed font-geist">
                                "Any individual shall be eligible to access an investigational treatment under this Act, regardless of their current health status, medical diagnosis, or condition."
                            </p>
<div className="mt-4 flex items-center gap-2 text-sm text-[#007F73] font-medium font-geist">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Removes eligibility limitations
                            </div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div className="p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="text-[#007F73] font-semibold text-sm uppercase tracking-wide mb-1 font-geist">Proposed Change #2</div>
<h4 className="text-xl font-semibold text-slate-900 font-geist">Right to Profit &amp; Negotiate</h4>
</div>
<svg className="lucide lucide-trending-up w-6 h-6 text-slate-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="p-8 grid lg:grid-cols-2 gap-12">
<div className="space-y-4">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-geist">Current Status</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-slate-500">
<svg className="lucide lucide-alert-circle w-5 h-5 text-orange-400 shrink-0 mt-0.5" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="font-geist">Manufacturers may provide treatments  but are not required to do so.</span>
</li>
<li className="flex items-start gap-3 text-base text-slate-500">
<svg className="lucide lucide-alert-circle w-5 h-5 text-orange-400 shrink-0 mt-0.5" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="font-geist">Compensation is generally limited to the .</span>
</li>
<li className="flex items-start gap-3 text-base text-slate-500">
<svg className="lucide lucide-alert-circle w-5 h-5 text-orange-400 shrink-0 mt-0.5" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="font-geist">Provides zero incentive for companies to engage with patients.</span>
</li>
</ul>
</div>
<div className="space-y-4">
<div className="text-xs font-semibold text-[#007F73] uppercase tracking-widest font-geist">Proposed &amp; Adopted (MT)</div>
<div className="bg-[#007F73]/5 p-6 rounded-xl border border-[#007F73]/10">
<p className="text-lg font-medium text-slate-900 leading-relaxed font-geist">
                                "Allow companies to negotiate directly with the patient and to sell the drug at fair market value with no limit on maximizing profit."
                            </p>
<div className="mt-4 flex items-center gap-2 text-sm text-[#007F73] font-medium font-geist">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Creates market for Phase I drugs
                            </div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
<h4 className="text-xl font-semibold text-slate-900 mb-8 font-geist">Additional Required Modifications</h4>
<div className="divide-y divide-slate-100">
<div className="py-8 first:pt-0">
<div className="flex items-start gap-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-semibold shrink-0 font-geist">3</span>
<div className="">
<h5 className="text-lg font-medium text-slate-900 mb-2 font-geist">Company's Clinical Trial Data</h5>
<p className="text-lg text-slate-600 leading-relaxed mb-3">
</p>
<p className="text-base text-slate-500 leading-relaxed font-geist">
                                    Allow companies to fund the cost of later clinical trials through sales of the drug via Right to Try. This expands the pool of eligible products for patients seeking therapy.
                                </p>
</div>
</div>
</div>
<div className="py-8 last:pb-0">
<div className="flex items-start gap-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-semibold shrink-0 font-geist">4</span>
<div className="">
<h5 className="text-lg font-medium text-slate-900 mb-2 font-geist">Clinical Trial Process Fees</h5>
<p className="text-lg text-slate-600 leading-relaxed mb-3">
</p>
<p className="text-base text-slate-500 leading-relaxed font-geist">
                                    This hurdle prevents many companies from conducting Phase I trials. Removing it creates massive competition for valuable indications like knee injections or heart disease stem cell treatments, driving down costs.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-16 px-6">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-4 max-w-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#007F73] flex items-center justify-center text-white">
<svg className="lucide lucide-dna w-5 h-5 stroke-[1.5]" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 font-geist">Perinatal Stem Cell Society</span>
</div>
<p className="text-base text-slate-500 font-geist">Advancing regenerative medicine through legislative reform and scientific research.</p>
</div>
<div className="flex flex-wrap gap-12">
<div className="space-y-3">
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider font-geist">Society</h4>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#007F73] font-geist" href="#">Who We Are</a></li>
<li><a className="hover:text-[#007F73] font-geist" href="#">Our Plan</a></li>
<li><a className="hover:text-[#007F73] font-geist" href="#">Conferences</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider font-geist">Veterans</h4>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#007F73] font-geist" href="#">Sponsor A Vet</a></li>
<li><a className="hover:text-[#007F73] font-geist" href="#">Apply Here</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider font-geist">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#007F73] font-geist" href="#">Right to Try</a></li>
<li><a className="hover:text-[#007F73] font-geist" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-sm text-slate-400">
<p className="font-geist">© 2025 Perinatal Stem Cell Society. All rights reserved.</p>
<div className="flex gap-4">
<svg className="lucide lucide-twitter w-5 h-5 hover:text-[#007F73] cursor-pointer" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-5 h-5 hover:text-[#007F73] cursor-pointer" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</footer>


    </>
  );
}
