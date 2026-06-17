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
      

<div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800 text-white px-4 py-2.5 flex justify-center items-center">
<div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
<span className="text-xs font-medium text-zinc-300">TRST.com, the premium domain and the site being built on it, are available for acquisition or partnership by qualified companies.</span>
<a className="whitespace-nowrap bg-white text-zinc-900 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors" href="#inquire">Inquire</a>
</div>
</div>

<header className="fixed top-[72px] sm:top-[44px] left-0 right-0 z-40 px-6 py-4 flex justify-center pointer-events-none">
<div className="w-full max-w-6xl flex justify-between items-center pointer-events-auto">
<a className="flex items-start text-zinc-900" href="/">
<span className="text-2xl tracking-tighter font-medium">TRST</span>
<span className="text-[10px] font-medium ml-0.5 mt-1 text-zinc-400">.com</span>
</a>
<div className="hidden md:flex items-center bg-white/80 backdrop-blur-md border border-zinc-200/50 rounded-full p-1.5 shadow-sm">
<a className="px-5 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#ideas">Ideas</a>
<a className="px-5 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="/about">About</a>
<a className="px-5 py-2 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors shadow-sm" href="#inquire">Inquire</a>
</div>

<button className="md:hidden bg-white/80 backdrop-blur-md border border-zinc-200/50 text-zinc-900 flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium shadow-sm hover:bg-white transition-colors">
                Menu
                <iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow flex flex-col items-center w-full pt-32 sm:pt-24">

<section className="relative w-full max-w-6xl px-6 pt-16 pb-20 md:pt-32 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

<div className="flex-1 flex flex-col items-start text-left z-10 w-full">
<span className="bg-zinc-200/50 border border-zinc-300/50 text-zinc-800 text-xs font-medium px-4 py-1.5 rounded-full mb-8 shadow-sm">Available for acquisition or partnership</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6 text-zinc-900 max-w-2xl">
                    Own the brand for digital <span className="text-zinc-500">trust</span> infrastructure.
                </h1>
<p className="text-base md:text-lg font-normal text-zinc-500 mb-8 max-w-xl leading-relaxed">
                    TRST.com is a premium domain being developed as a category-defining digital trust infrastructure asset and is available for acquisition or partnership by qualified companies in identity, verification, compliance, fraud prevention, and security.
                </p>
<div className="flex items-center gap-3 mb-10 p-4 bg-zinc-100/80 rounded-2xl border border-zinc-200/60 max-w-xl">
<div className="min-w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-medium text-zinc-600 leading-snug">
                        Trust, verification, and compliance are becoming core buying and platform requirements — early category ownership matters.
                    </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white transition-colors rounded-full py-3.5 px-8 text-sm font-medium flex justify-center items-center shadow-md" href="#inquire">
                        Partnership / Acquisition Inquiry
                    </a>
<a className="w-full sm:w-auto bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 transition-colors rounded-full py-3.5 px-8 text-sm font-medium flex justify-center items-center shadow-sm" href="#ideas">
                        Explore Ideas
                    </a>
</div>
</div>

<div className="flex-1 w-full lg:w-auto aspect-square md:aspect-[4/3] rounded-[2rem] bg-zinc-100 overflow-hidden relative border border-zinc-200/80 shadow-inner group">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-zinc-200/50 mix-blend-overlay z-10"></div>

<div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #71717a 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<img alt="Abstract editorial illustration with layered signal/network forms, trust marks, verification motifs, and infrastructure-like structure" className="absolute inset-0 w-full h-full object-cover z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" src=""/>

<div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
<div className="relative w-48 h-48">
<div className="absolute inset-0 border border-zinc-300 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
<div className="absolute inset-4 border border-zinc-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-6xl text-zinc-300" icon="solar:shield-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-4xl px-6 py-16 md:py-24 flex flex-col items-center text-center border-t border-zinc-200/50">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">What this is</span>
<p className="text-xl md:text-2xl font-medium text-zinc-800 leading-relaxed max-w-3xl">
                TRST.com is being developed by OnlineBusiness.com as a digital trust infrastructure asset. The premium domain and the site being built on it are available for acquisition or partnership. Below are five researched business ideas showing how TRST.com could be built into a category-leading company, media property, platform, or operating brand. Qualified companies can inquire about acquiring the asset outright or partnering to build it out.
            </p>
<div className="flex flex-wrap justify-center gap-3 mt-10">
<span className="bg-white border border-zinc-200 text-zinc-600 text-[11px] font-medium px-4 py-1.5 rounded-full shadow-sm">Premium four-letter brand</span>
<span className="bg-white border border-zinc-200 text-zinc-600 text-[11px] font-medium px-4 py-1.5 rounded-full shadow-sm">Fits multiple high-value software categories</span>
<span className="bg-white border border-zinc-200 text-zinc-600 text-[11px] font-medium px-4 py-1.5 rounded-full shadow-sm">Designed for acquisition or build partnership</span>
</div>
</section>

<section className="w-full bg-zinc-100/50 py-24 md:py-32 px-6 flex flex-col items-center border-y border-zinc-200/50" id="ideas">
<div className="mb-16 flex flex-col items-center text-center max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
                    Five researched business ideas for TRST.com
                </h2>
<p className="text-sm font-normal text-zinc-500">
                    Each idea shows a credible way to build TRST.com into a strategic operating asset.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

<a className="group bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-md md:col-span-2 lg:col-span-2 flex flex-col justify-between relative overflow-hidden hover:border-zinc-300 transition-colors" href="/ideas/trust-infrastructure-platform">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-zinc-100 transition-colors"></div>
<div className="relative z-10 mb-8">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="bg-zinc-100 border border-zinc-200 text-zinc-800 text-[10px] font-medium px-3 py-1 rounded-full">Top-rated idea</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-3">Trust Infrastructure Platform</h3>
<p className="text-sm font-medium text-zinc-600 mb-4">A category-leading platform for identity, verification, compliance, reputation, and trust signals.</p>
<p className="text-sm font-normal text-zinc-500 leading-relaxed max-w-lg">Strong fit for identity, trust and safety, fraud, compliance, and security operators that want to own the trust narrative.</p>
</div>
<div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-zinc-100">
<span className="text-xs font-medium text-zinc-400">Brand-led platform + enterprise software positioning</span>
<span className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">View idea <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm flex flex-col justify-between hover:border-zinc-200 hover:shadow-md transition-all" href="/ideas/trust-and-safety-operating-system">
<div className="mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-6">
<iconify-icon className="text-xl" icon="solar:flag-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Trust and Safety Operating System</h3>
<p className="text-xs font-medium text-zinc-600 mb-3">A focused brand for tools, workflows, and intelligence used by trust and safety teams.</p>
<p className="text-xs font-normal text-zinc-500 leading-relaxed">Ideal for trust and safety vendors or platforms expanding into moderation, abuse prevention, and policy operations.</p>
</div>
<div className="flex flex-col gap-4 pt-6 border-t border-zinc-50 mt-auto">
<span className="text-[10px] font-medium text-zinc-400">Enterprise software + category authority content</span>
<span className="text-xs font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">View idea <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm flex flex-col justify-between hover:border-zinc-200 hover:shadow-md transition-all" href="/ideas/identity-verification-intelligence-hub">
<div className="mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-6">
<iconify-icon className="text-xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Identity Verification Intelligence Hub</h3>
<p className="text-xs font-medium text-zinc-600 mb-3">A category authority property around identity verification methods, vendors, standards, and choices.</p>
<p className="text-xs font-normal text-zinc-500 leading-relaxed">Best for verification companies or security operators that want a stronger content and category position.</p>
</div>
<div className="flex flex-col gap-4 pt-6 border-t border-zinc-50 mt-auto">
<span className="text-[10px] font-medium text-zinc-400">Authority media + structured category pages + lead-gen asset</span>
<span className="text-xs font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">View idea <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm flex flex-col justify-between hover:border-zinc-200 hover:shadow-md transition-all" href="/ideas/vendor-trust-benchmarking-platform">
<div className="mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-6">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Vendor Trust Benchmarking Platform</h3>
<p className="text-xs font-medium text-zinc-600 mb-3">A benchmarking and evaluation property for comparing trust, fraud, and compliance vendors.</p>
<p className="text-xs font-normal text-zinc-500 leading-relaxed">Compelling for buyers or operators who want to own the comparison and evaluation layer in this market.</p>
</div>
<div className="flex flex-col gap-4 pt-6 border-t border-zinc-50 mt-auto">
<span className="text-[10px] font-medium text-zinc-400">Benchmarking media + scorecard tool + sponsorship/lead value</span>
<span className="text-xs font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">View idea <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm flex flex-col justify-between hover:border-zinc-200 hover:shadow-md transition-all md:col-span-2 lg:col-span-1" href="/ideas/digital-trust-frameworks-and-standards-brand">
<div className="mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-6">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Digital Trust Frameworks Brand</h3>
<p className="text-xs font-medium text-zinc-600 mb-3">A trusted destination for frameworks, methodologies, and operational guidance on digital trust.</p>
<p className="text-xs font-normal text-zinc-500 leading-relaxed">Useful for compliance, security, and governance-focused operators building authority across enterprise trust topics.</p>
</div>
<div className="flex flex-col gap-4 pt-6 border-t border-zinc-50 mt-auto">
<span className="text-[10px] font-medium text-zinc-400">Category authority media + training/certification adjacency</span>
<span className="text-xs font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">View idea <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
</section>

<section className="w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col items-center">
<div className="mb-16 flex flex-col items-center text-center max-w-2xl">
<span className="bg-white border border-zinc-200 text-zinc-800 text-xs font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">Who should inquire</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
                    Built for the core pillars of digital security
                </h2>
<p className="text-sm font-normal text-zinc-500">
                    If your company sees strategic value in controlling or shaping TRST.com, start the conversation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex flex-col gap-6">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-800">
<iconify-icon className="text-xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Identity and verification companies</h3>
<p className="text-sm font-normal text-zinc-500">Companies that want a stronger category brand for verification, onboarding, and identity infrastructure.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex flex-col gap-6">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-800">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Trust and safety platforms</h3>
<p className="text-sm font-normal text-zinc-500">Operators building products for moderation, abuse prevention, reputation, and policy enforcement.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex flex-col gap-6">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-800">
<iconify-icon className="text-xl" icon="solar:bug-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Fraud prevention vendors</h3>
<p className="text-sm font-normal text-zinc-500">Teams looking to expand into trust scoring, risk signaling, and digital credibility workflows.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex flex-col gap-6 md:col-start-1 lg:col-start-auto">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-800">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Compliance technology operators</h3>
<p className="text-sm font-normal text-zinc-500">Businesses working across KYC, KYB, AML, onboarding controls, or regulatory workflows.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex flex-col gap-6 md:col-span-2 lg:col-span-1">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-800">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Security software companies</h3>
<p className="text-sm font-normal text-zinc-500">Security and infrastructure brands that see strategic value in owning a trust-centered market position.</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-zinc-900 text-white py-24 md:py-32 px-6 flex flex-col items-center">
<div className="mb-16 flex flex-col items-center text-center max-w-3xl">
<span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">Partnership Paths</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
                    Build with us or acquire outright
                </h2>
<p className="text-sm font-normal text-zinc-400">
                    Whether you want immediate control or a build-first partnership path, the opportunity starts with inquiry.
                </p>
</div>

<div className="w-full max-w-5xl bg-zinc-950 rounded-[2.5rem] border border-zinc-800 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at top right, rgba(255,255,255,0.03) 0%, transparent 40%)'}}></div>

<div className="flex-1 flex flex-col justify-start">
<div className="mb-6">
<h3 className="text-3xl font-medium tracking-tighter mb-4 text-white">Acquire outright</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed max-w-sm">
                            Acquire the TRST.com premium domain and the asset being built on it. Bring it into your portfolio, brand architecture, or operating roadmap and build it your way with your team.
                        </p>
</div>
</div>

<div className="flex-1 flex flex-col justify-start bg-zinc-900/50 rounded-3xl p-8 md:p-10 border border-zinc-800">
<h3 className="text-2xl font-medium tracking-tighter mb-4 text-white">Build together</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed mb-10">
                        Partner with OnlineBusiness.com to develop TRST.com into a full operating business. We handle the build and strategic execution with you, creating a stronger asset under aligned ownership.
                    </p>
<div className="mt-auto pt-6 border-t border-zinc-800 flex items-start gap-3">
<iconify-icon className="text-zinc-500 text-lg flex-shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-zinc-500 leading-relaxed">
                            TRST.com is developed by OnlineBusiness.com, a digital assets studio that builds businesses on premium domains.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-3xl px-6 py-24 md:py-32 flex flex-col items-center" id="inquire">
<div className="mb-12 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
                    Discuss TRST.com
                </h2>
<p className="text-sm font-normal text-zinc-500">
                    If you’re interested in acquiring or partnering on TRST.com, start the conversation here.
                </p>
</div>
<form className="w-full flex flex-col gap-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="name">Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all shadow-sm placeholder:text-zinc-400" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="company">Company</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all shadow-sm placeholder:text-zinc-400" id="company" placeholder="Acme Security" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="email">Work Email</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all shadow-sm placeholder:text-zinc-400" id="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="type">Inquiry Type</label>
<select className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all shadow-sm" id="type" required="">
<option disabled="" selected="" value="">Select an option</option>
<option value="acquisition">Acquisition</option>
<option value="partnership">Partnership - Build Together</option>
<option value="general">General Inquiry</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="message">Message</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all shadow-sm resize-y placeholder:text-zinc-400" id="message" placeholder="Tell us about your strategic interest in TRST.com..." required="" rows="4"></textarea>
</div>
<button className="w-full mt-2 bg-zinc-900 hover:bg-zinc-800 text-white transition-colors rounded-xl py-4 px-8 text-sm font-medium shadow-md" type="submit">
                    Discuss Partnership or Acquisition
                </button>
<p className="text-xs text-center text-zinc-500 mt-4">
                    Or email <a className="font-medium hover:text-zinc-800 transition-colors" href="mailto:inquiries@onlinebusiness.com">inquiries@onlinebusiness.com</a>
</p>
</form>
</section>
</main>

<footer className="bg-zinc-950 text-white pt-16 pb-12 px-6 w-full flex flex-col items-center">
<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2 flex flex-col items-start justify-start">
<a className="flex items-start text-white mb-6" href="/">
<span className="text-3xl tracking-tighter font-medium">TRST</span>
<span className="text-xs font-medium ml-0.5 mt-1 text-zinc-500">.com</span>
</a>
<p className="text-sm font-normal text-zinc-400 max-w-sm mb-6 leading-relaxed">
                    TRST.com — a category-defining brand for digital trust infrastructure. Available for acquisition or partnership.
                </p>
<a className="bg-white hover:bg-zinc-200 text-zinc-900 transition-colors rounded-full py-2.5 px-6 text-sm font-medium inline-flex shadow-sm" href="#inquire">
                    Inquire Now
                </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Business Ideas</h4>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="/ideas/trust-infrastructure-platform">Trust Infrastructure Platform</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="/ideas/trust-and-safety-operating-system">Trust and Safety Operating System</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="/ideas/identity-verification-intelligence-hub">Identity Verification Intelligence Hub</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="/ideas/vendor-trust-benchmarking-platform">Vendor Trust Benchmarking Platform</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="/ideas/digital-trust-frameworks-and-standards-brand">Digital Trust Frameworks Brand</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Company</h4>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="/about">About</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#inquire">Inquire</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="/tools/digital-trust-scorecard">Digital Trust Scorecard</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors mt-4" href="https://www.onlinebusiness.com" rel="noopener" target="_blank">OnlineBusiness.com</a>
</div>
</div>
<div className="w-full max-w-6xl border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500">
<p>© 2025 OnlineBusiness.com. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
