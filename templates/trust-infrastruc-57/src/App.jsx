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
      

<div className="sticky top-0 z-50 w-full flex flex-col">

<div className="bg-[#0B1354] text-white px-4 py-2.5 text-xs sm:text-sm font-light flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 border-b border-white/10 shadow-sm">
<span className="text-center">TRST.com, a premium domain and the site being built on it, is available for acquisition or partnership by qualified companies.</span>
<a className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/20 text-white px-4 py-1.5 transition-colors hover:bg-white/20 whitespace-nowrap" href="#inquire">Inquire</a>
</div>

<nav className="w-full bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center">
<span className="font-normal tracking-tight text-2xl text-[#0B1354] leading-none">TRST.com</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-base font-light text-slate-500">
<a className="hover:text-[#0B1354] transition-colors" href="#directions">Directions</a>
<a className="hover:text-[#0B1354] transition-colors" href="#about">About</a>
<a className="inline-flex items-center justify-center rounded-lg bg-[#0B1354] text-white px-5 py-2.5 text-base font-normal transition-all hover:bg-[#0B1354]/90 shadow-sm" href="#inquire">
                        Inquire
                    </a>
</div>
</div>
</nav>
</div>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#0B1354] mb-6 leading-tight max-w-4xl mx-auto">
                A trust-layer brand for identity, verification, and enterprise security
            </h1>
<p className="text-xl sm:text-2xl text-slate-500 font-light tracking-tight mb-12 max-w-4xl mx-auto leading-relaxed">
                TRST.com is a premium domain being developed as a trust infrastructure asset and is available for acquisition or partnership by qualified companies in identity, authentication, verification, and security markets.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#0B1354] text-white px-8 py-4 text-xl font-normal transition-all hover:bg-[#0B1354]/90 shadow-md gap-2" href="#inquire">
                    Inquire About TRST.com
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white border border-slate-200/80 text-[#0B1354] px-8 py-4 text-xl font-normal transition-colors hover:bg-slate-50 shadow-sm gap-2" href="#directions">
                    Explore Directions
                </a>
</div>

<div className="relative w-full max-w-3xl mx-auto rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 shadow-2xl shadow-[#0B1354]/5 overflow-hidden flex flex-col gap-5 text-left">
<div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 gap-4">
<div className="flex items-center gap-2 text-[#0B1354] font-normal text-xl tracking-tight">
<iconify-icon className="text-2xl text-[#00E5FF]" icon="solar:shield-check-linear"></iconify-icon> 
                        Trust Stack Assessment
                    </div>
<div className="inline-flex self-start sm:self-auto items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-normal border border-emerald-100">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon> Verified Asset
                    </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-3xl text-slate-400" icon="solar:fingerprint-linear"></iconify-icon>
<span className="text-sm font-normal text-slate-500">Authentication</span>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-3xl text-slate-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-normal text-slate-500">Compliance Signals</span>
</div>
<div className="p-4 rounded-xl bg-[#0B1354]/5 border border-[#0B1354]/10 flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-3xl text-[#0B1354]" icon="solar:buildings-linear"></iconify-icon>
<span className="text-sm font-normal text-[#0B1354]">Enterprise Trust</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60" id="about">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl text-[#0B1354] font-light tracking-tight mb-8">What this is</h2>
<div className="space-y-6 text-xl sm:text-2xl text-slate-500 font-light leading-relaxed tracking-tight">
<p>
                    TRST.com is being developed by OnlineBusiness.com as a trust infrastructure asset. The premium domain and the site being built on it are available for acquisition or partnership.
                </p>
<p>
                    Below are five researched directions for how TRST.com can be developed into a category-defining property across identity, verification, security assurance, and enterprise trust signals. Qualified companies can inquire about acquiring the asset outright or partnering to build it out.
                </p>
</div>
<div className="mt-10 inline-flex items-start sm:items-center gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-2xl text-slate-400 shrink-0 mt-0.5 sm:mt-0" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-base text-slate-500 font-light">
                    One direction includes a lightweight <strong className="font-normal text-[#0B1354]">Trust Stack Grader</strong> to demonstrate practical utility without changing the acquisition-first focus.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA]" id="directions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight text-[#0B1354] mb-16 text-center">Five researched directions for TRST.com</h2>
<div className="grid lg:grid-cols-3 gap-8 items-stretch mb-8">

<div className="flex flex-col p-8 sm:p-10 rounded-3xl border-2 border-[#0B1354] bg-white shadow-xl relative h-full">
<div className="absolute -top-4 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1354] text-white text-xs font-normal tracking-wide shadow-sm">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon> Most intuitive direction
                    </div>
<h3 className="text-2xl font-normal tracking-tight text-[#0B1354] mb-3 mt-2">Trust Infrastructure Platform</h3>
<p className="text-lg text-[#0B1354] font-normal mb-8 leading-snug tracking-tight">A trust-layer brand for identity, verification, security assurance, and enterprise trust signals.</p>
<div className="space-y-5 mb-10 flex-1">
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Buyer Fit</span>
<p className="text-base text-slate-600 font-light">Strong fit for identity, security, and verification companies that want a category-defining brand.</p>
</div>
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Business Model</span>
<p className="text-base text-slate-600 font-light">Enterprise software / infrastructure brand</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal text-[#0B1354] hover:text-[#00E5FF] transition-colors mt-auto" href="#inquire">
                        View direction <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-col p-8 sm:p-10 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-shadow h-full">
<h3 className="text-2xl font-normal tracking-tight text-[#0B1354] mb-3">Enterprise Trust Center Software Brand</h3>
<p className="text-lg text-slate-500 font-light mb-8 leading-snug tracking-tight">A platform brand for publishing security posture, compliance signals, and verification artifacts.</p>
<div className="space-y-5 mb-10 flex-1">
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Buyer Fit</span>
<p className="text-base text-slate-600 font-light">Best for security software vendors, compliance platforms, and trust center operators.</p>
</div>
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Business Model</span>
<p className="text-base text-slate-600 font-light">SaaS / enterprise workflow platform</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal text-[#0B1354] hover:text-[#00E5FF] transition-colors mt-auto" href="#inquire">
                        View direction <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-col p-8 sm:p-10 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-shadow h-full">
<h3 className="text-2xl font-normal tracking-tight text-[#0B1354] mb-3">Identity Verification &amp; Authentication Intelligence Hub</h3>
<p className="text-lg text-slate-500 font-light mb-8 leading-snug tracking-tight">An analytical property covering authentication methods, identity verification systems, and digital trust frameworks.</p>
<div className="space-y-5 mb-10 flex-1">
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Buyer Fit</span>
<p className="text-base text-slate-600 font-light">Best for operators building authority in identity, access, and verification markets.</p>
</div>
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Business Model</span>
<p className="text-base text-slate-600 font-light">Media + lead generation + research asset</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal text-[#0B1354] hover:text-[#00E5FF] transition-colors mt-auto" href="#inquire">
                        View direction <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-stretch lg:max-w-5xl mx-auto">

<div className="flex flex-col p-8 sm:p-10 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-shadow h-full">
<h3 className="text-2xl font-normal tracking-tight text-[#0B1354] mb-3">Trust &amp; Safety Operating System for Platforms</h3>
<p className="text-lg text-slate-500 font-light mb-8 leading-snug tracking-tight">A strategic brand for infrastructure that helps platforms manage abuse prevention, verification, and policy enforcement.</p>
<div className="space-y-5 mb-10 flex-1">
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Buyer Fit</span>
<p className="text-base text-slate-600 font-light">Best for platform security vendors and enterprise trust &amp; safety operators.</p>
</div>
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Business Model</span>
<p className="text-base text-slate-600 font-light">B2B platform / infrastructure layer</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal text-[#0B1354] hover:text-[#00E5FF] transition-colors mt-auto" href="#inquire">
                        View direction <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-col p-8 sm:p-10 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-shadow h-full">
<h3 className="text-2xl font-normal tracking-tight text-[#0B1354] mb-3">Trust Stack Assessment &amp; Benchmarking Asset</h3>
<p className="text-lg text-slate-500 font-light mb-8 leading-snug tracking-tight">A structured evaluation property built around trust scoring, benchmarking, and assessment frameworks.</p>
<div className="space-y-5 mb-10 flex-1">
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Buyer Fit</span>
<p className="text-base text-slate-600 font-light">Best for companies that want a trust evaluation wedge plus content and tooling depth.</p>
</div>
<div>
<span className="text-xs text-slate-400 font-normal uppercase tracking-widest block mb-1">Business Model</span>
<p className="text-base text-slate-600 font-light">Assessment engine + content + tool-led acquisition</p>
</div>
</div>
<div className="mt-auto flex flex-col items-start">
<a className="inline-flex items-center gap-2 text-base font-normal text-[#0B1354] hover:text-[#00E5FF] transition-colors mb-5" href="#inquire">
                            View direction <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-xs text-slate-400 font-light pt-4 border-t border-slate-100 w-full">
                            Includes a lightweight Trust Stack Grader concept for websites, products, or SaaS platforms.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight text-[#0B1354] mb-16">Who should inquire</h2>
<div className="space-y-10">
<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#0B1354]" icon="solar:user-id-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-normal text-[#0B1354] tracking-tight mb-2">Identity and access management companies</h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">Looking for a stronger category brand around digital trust, authentication, or verification.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#0B1354]" icon="solar:server-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-normal text-[#0B1354] tracking-tight mb-2">Digital identity infrastructure providers</h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">Seeking a memorable domain and strategic brand layer for trust-critical infrastructure.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#0B1354]" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-normal text-[#0B1354] tracking-tight mb-2">Security software platforms</h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">Expanding into trust assurance, compliance signaling, verification, or enterprise confidence tooling.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#0B1354]" icon="solar:shield-network-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-normal text-[#0B1354] tracking-tight mb-2">Enterprise trust and safety operators</h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">Building products or infrastructure around abuse prevention, reputation, policy enforcement, and verified interactions.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#0B1354]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-normal text-[#0B1354] tracking-tight mb-2">Authentication and verification vendors</h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">Wanting a tighter brand fit for credentials, identity proofing, access assurance, or trust orchestration.</p>
</div>
</div>
</div>
<div className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-100">
<p className="text-xl text-[#0B1354] font-normal tracking-tight m-0">
                    If your company sees strategic value in controlling or shaping TRST.com, start the conversation.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight text-[#0B1354] mb-16 text-center">Build with us or acquire outright</h2>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="p-10 rounded-3xl bg-white border border-slate-200/60 shadow-sm flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-[#0B1354]/5 text-[#0B1354] flex items-center justify-center mb-8 border border-[#0B1354]/10">
<iconify-icon className="text-3xl" icon="solar:bag-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-[#0B1354] mb-4">Acquire outright</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                        Acquire the TRST.com premium domain and the asset being built on it. Take full control of the brand, direction, and operating model, and build it with your team.
                    </p>
</div>

<div className="p-10 rounded-3xl bg-white border border-slate-200/60 shadow-sm flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-8 border border-[#00E5FF]/20">
<iconify-icon className="text-3xl" icon="solar:handshake-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-[#0B1354] mb-4">Build together</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                        Partner with OnlineBusiness.com to develop TRST.com into a full operating business. We handle the build with you and structure the asset for long-term ownership.
                    </p>
</div>
</div>
<div className="text-center">
<p className="text-base text-slate-400 font-light">
                    TRST.com is developed by OnlineBusiness.com, a digital assets studio that builds businesses on premium domains.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-slate-200/60" id="inquire">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight text-[#0B1354] mb-5">Discuss TRST.com</h2>
<p className="text-xl text-slate-500 font-light tracking-tight">If you're interested in acquiring or partnering on TRST.com, start the conversation here.</p>
</div>
<form className="space-y-6 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">Name</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-700 font-light focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/40 focus:border-[#00E5FF] transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">Company</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-700 font-light focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/40 focus:border-[#00E5FF] transition-all" placeholder="Acme Identity" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">Email</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-700 font-light focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/40 focus:border-[#00E5FF] transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">Inquiry Type</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-700 font-light focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/40 focus:border-[#00E5FF] transition-all appearance-none cursor-pointer">
<option value="acquisition">Acquisition</option>
<option value="partnership">Partnership - Build Together</option>
<option value="general">General Inquiry</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">Message</label>
<textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-700 font-light focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/40 focus:border-[#00E5FF] transition-all resize-none" placeholder="Tell us about your interest..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-[#0B1354] text-white px-8 py-4 text-xl font-normal transition-all hover:bg-[#0B1354]/90 shadow-md" type="button">
                        Discuss Partnership or Acquisition
                    </button>
</div>
<div className="text-center pt-2">
<a className="text-sm text-slate-400 font-light hover:text-[#0B1354] transition-colors" href="mailto:contact@onlinebusiness.com">
                        Or email contact@onlinebusiness.com
                    </a>
</div>
</form>
</div>
</section>

<footer className="py-20 bg-[#FAFAFA] border-t border-slate-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<span className="font-normal tracking-tight text-2xl text-[#0B1354] leading-none mb-4 block">TRST.com</span>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        A trust-layer brand for identity, verification, security assurance, and enterprise trust infrastructure. Available for acquisition or partnership.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-sm font-light">
<div className="flex flex-col gap-3">
<span className="font-normal text-[#0B1354] mb-2 uppercase tracking-widest text-xs">Directions</span>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors inline-block" href="#directions">Trust Infrastructure Platform</a>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors inline-block" href="#directions">Enterprise Trust Center Software Brand</a>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors inline-block" href="#directions">Identity Verification &amp; Authentication Hub</a>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors inline-block" href="#directions">Trust &amp; Safety Operating System</a>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors inline-block" href="#directions">Trust Stack Assessment &amp; Benchmarking</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-normal text-[#0B1354] mb-2 uppercase tracking-widest text-xs">Company</span>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors" href="#about">About</a>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors" href="#inquire">Inquire</a>
<a className="text-slate-500 hover:text-[#0B1354] transition-colors" href="https://onlinebusiness.com" rel="noopener noreferrer" target="_blank">OnlineBusiness.com</a>
</div>
</div>
</div>
<div className="text-center pt-8 border-t border-slate-200/80">
<p className="text-sm text-slate-400 font-light">© TRST.com. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
