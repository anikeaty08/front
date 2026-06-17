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
      

<nav className="w-full px-6 py-6 lg:px-12 flex justify-between items-center bg-transparent relative z-50">
<div className="flex items-center gap-2">
<div className="text-stone-900 flex items-center justify-center">
<iconify-icon height="24" icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight">Vendaya</span>
</div>
<div className="hidden md:flex gap-8">
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Infrastructure</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Governance</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Audit</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Philosophy</a>
</div>
<div className="flex items-center gap-6">
<span className="text-xs font-medium text-stone-400">EN</span>
<button className="bg-stone-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-stone-800 transition-colors font-medium">
                Client Access
            </button>
</div>
</nav>

<main className="px-4 lg:px-6 pb-6 space-y-4">

<div className="relative w-full h-[85vh] min-h-[600px] rounded-[2.5rem] overflow-hidden bg-stone-950 flex flex-col justify-between p-6 md:p-10 lg:p-12">

<div className="absolute inset-0 z-0">
<img alt="Abstract Architecture" className="w-full h-full object-cover opacity-40 grayscale contrast-125" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-stone-950/40"></div>
</div>

<div className="relative z-10 flex justify-between items-start w-full">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-stone-300 font-medium tracking-wide uppercase">Reserve Operational</span>
</div>
<div className="hidden md:inline-flex px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<span className="text-xs text-stone-300 font-medium">Class A Infrastructure</span>
</div>
</div>

<div className="relative z-10 mt-auto mb-12 lg:mb-20">
<h1 className="text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.9]">
                    Disciplined Value<br/>
<span className="font-serif-italic opacity-90 text-stone-200">—Preserved</span>
</h1>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 bg-stone-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 items-end md:items-center">

<div className="md:col-span-3 flex flex-col gap-1 md:border-r md:border-white/10 pr-6">
<span className="text-xs text-stone-400 font-medium">Anchor Asset</span>
<span className="text-lg text-white font-medium tracking-tight">Allocated Gold</span>
</div>

<div className="md:col-span-3 flex flex-col gap-1 md:border-r md:border-white/10 md:px-6">
<span className="text-xs text-stone-400 font-medium">Mechanism</span>
<span className="text-lg text-white font-medium tracking-tight">Stabilized Value Units</span>
</div>

<div className="md:col-span-3 flex flex-col gap-1 md:px-6">
<span className="text-xs text-stone-400 font-medium">Horizon</span>
<span className="text-lg text-emerald-400 font-medium tracking-tight">Generational</span>
</div>

<div className="md:col-span-3 flex justify-start md:justify-end mt-4 md:mt-0">
<button className="group bg-white text-stone-950 px-6 py-3 rounded-full flex items-center gap-3 hover:bg-stone-200 transition-all duration-300 w-full md:w-auto justify-center">
<span className="text-sm font-medium">Inquire for Access</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="max-w-6xl mx-auto py-24 lg:py-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">

<div className="md:col-span-1">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-6">The Thesis</h2>
<div className="w-12 h-[1px] bg-stone-300 mb-6"></div>
<p className="text-lg text-stone-500 leading-relaxed">
                        Volatility erodes legacy. We engineer stability through physical anchors, divorced from speculative markets.
                    </p>
</div>

<div className="md:col-span-2 space-y-16">

<div className="group">
<div className="flex items-baseline gap-4 mb-3">
<span className="text-xs font-mono text-stone-400">01</span>
<h3 className="text-xl font-medium text-stone-900">Infrastructure, Not Depository</h3>
</div>
<p className="text-lg text-stone-600 leading-relaxed pl-8 md:pl-10 max-w-2xl">
                            Vendaya Reserve is a gold-anchored reserve infrastructure. It does not sell gold. Members do not buy or own gold. Instead, the reserve utilizes gold as a system-level anchor to enforce discipline.
                        </p>
</div>

<div className="group">
<div className="flex items-baseline gap-4 mb-3">
<span className="text-xs font-mono text-stone-400">02</span>
<h3 className="text-xl font-medium text-stone-900">Private &amp; Curated</h3>
</div>
<p className="text-lg text-stone-600 leading-relaxed pl-8 md:pl-10 max-w-2xl">
                            Access is restricted to family offices, fiduciaries, and private capital holders seeking long-horizon value preservation. Membership is by invitation or approved inquiry only.
                        </p>
</div>

<div className="group">
<div className="flex items-baseline gap-4 mb-3">
<span className="text-xs font-mono text-stone-400">03</span>
<h3 className="text-xl font-medium text-stone-900">Measured Permanence</h3>
</div>
<p className="text-lg text-stone-600 leading-relaxed pl-8 md:pl-10 max-w-2xl">
                            We strip away marketing fluff, crypto speculation, and short-term hype. The objective is singular: the structured preservation of purchasing power across generations.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-white rounded-[2.5rem] p-8 lg:p-12 border border-stone-200/60 shadow-sm">
<div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-xl">
<span className="text-xs font-medium text-emerald-600 tracking-wider uppercase mb-2 block">System Architecture</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">A closed-loop system designed for zero counterparty risk.</h2>
</div>
<div className="text-right hidden md:block">
<span className="text-xs text-stone-400 font-mono">CODE: V-RES-ARCH-01</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-900">
<iconify-icon height="20" icon="solar:safe-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Allocated Physicals</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Every unit of value is backed 1:1 by physical Good Delivery bars, identified by serial number and allocated specifically to the reserve's ledger. No fractional reserve.
                    </p>
</div>

<div className="bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-900">
<iconify-icon height="20" icon="solar:gavel-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Bankruptcy Remote</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Assets are held in a legal trust structure completely segregated from Vendaya's operational balance sheet. Your capital is never our liability.
                    </p>
</div>

<div className="bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-900">
<iconify-icon height="20" icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Real-time Attestation</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Daily reconciliation between the digital ledger and physical inventory lists provided by third-party vault operators. Transparency is programmatic.
                    </p>
</div>
</div>
</section>

<section className="w-full py-24 px-4 lg:px-12">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-6">Jurisdictional Diversity</h2>
<p className="text-lg text-stone-500 mb-8 max-w-md">
                        We operate a distributed network of Class III vaults across politically neutral and historically stable jurisdictions.
                    </p>
<div className="flex gap-4">
<div className="px-4 py-2 bg-stone-100 rounded-lg border border-stone-200 flex flex-col gap-1">
<span className="text-xs text-stone-400 uppercase">Total Capacity</span>
<span className="text-lg font-medium text-stone-900">450 Tonnes</span>
</div>
<div className="px-4 py-2 bg-stone-100 rounded-lg border border-stone-200 flex flex-col gap-1">
<span className="text-xs text-stone-400 uppercase">Insured Value</span>
<span className="text-lg font-medium text-stone-900">100% Replacement</span>
</div>
</div>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-all">
<div className="flex items-center gap-4">
<div className="p-2 bg-stone-50 rounded-full text-stone-900">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Zurich Free Port</h4>
<span className="text-xs text-stone-400">Switzerland</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-stone-500">Operational</span>
</div>
</div>

<div className="flex items-center justify-between p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-all">
<div className="flex items-center gap-4">
<div className="p-2 bg-stone-50 rounded-full text-stone-900">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Le Freeport</h4>
<span className="text-xs text-stone-400">Singapore</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-stone-500">Operational</span>
</div>
</div>

<div className="flex items-center justify-between p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-all">
<div className="flex items-center gap-4">
<div className="p-2 bg-stone-50 rounded-full text-stone-900">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">The Loomis Facility</h4>
<span className="text-xs text-stone-400">London</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-stone-300"></span>
<span className="text-xs font-medium text-stone-400">Standby</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone-900 rounded-[2.5rem] p-8 lg:p-24 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-800/20 to-transparent pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
<iconify-icon height="14" icon="solar:graph-up-linear" width="14"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Performance Metric</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6">Zero Correlation.</h2>
<p className="text-lg text-stone-400 max-w-md leading-relaxed">
                        In moments of systemic stress, correlation approaches one. Vendaya creates a mathematical floor, decoupling your reserve assets from traditional equity and debt cycles.
                    </p>
</div>
<div className="flex flex-col justify-center gap-8 border-l border-white/10 pl-8 md:pl-16">
<div>
<span className="text-4xl lg:text-6xl font-medium tracking-tighter">0.00</span>
<span className="text-sm text-stone-400 block mt-2 uppercase tracking-wide">Counterparty Debt</span>
</div>
<div>
<span className="text-4xl lg:text-6xl font-medium tracking-tighter">100<span className="text-2xl align-top">%</span></span>
<span className="text-sm text-stone-400 block mt-2 uppercase tracking-wide">Liquidity Ratio</span>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-24">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Access Protocol</h2>
<p className="text-stone-500">A rigorous vetting process ensures the integrity of the collective.</p>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-200 -z-10 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center mb-4 text-stone-900 shadow-sm">
<span className="font-mono text-sm font-medium">01</span>
</div>
<h3 className="text-sm font-semibold text-stone-900 mb-2 uppercase tracking-wide">Inquiry</h3>
<p className="text-xs text-stone-500 leading-relaxed px-4">
                            Submission of intent via secure channel. Verification of institutional or accredited status.
                        </p>
</div>

<div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center mb-4 text-stone-900 shadow-sm">
<span className="font-mono text-sm font-medium">02</span>
</div>
<h3 className="text-sm font-semibold text-stone-900 mb-2 uppercase tracking-wide">Review</h3>
<p className="text-xs text-stone-500 leading-relaxed px-4">
                            Secretariat review of capital origin and alignment with reserve horizon objectives.
                        </p>
</div>

<div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center mb-4 text-stone-900 shadow-sm">
<span className="font-mono text-sm font-medium">03</span>
</div>
<h3 className="text-sm font-semibold text-stone-900 mb-2 uppercase tracking-wide">Allocation</h3>
<p className="text-xs text-stone-500 leading-relaxed px-4">
                            Creation of segregated vault account and issuance of digital ownership certificates.
                        </p>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="bg-stone-900 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-stone-800 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-stone-200 flex items-center gap-3">
<span>Initiate Protocol</span>
<iconify-icon height="18" icon="solar:login-2-linear" width="18"></iconify-icon>
</button>
</div>
</section>

<div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12">
<div className="flex flex-col gap-1">
<span className="text-xs text-stone-400 uppercase tracking-wider">Vendaya Reserve Systems</span>
<span className="text-xs text-stone-500">Geneva — Singapore — New York</span>
</div>
<div className="flex gap-6 flex-wrap">
<a className="text-xs text-stone-500 hover:text-stone-900 transition-colors" href="#">Legal Disclosure</a>
<a className="text-xs text-stone-500 hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact Secretariat</a>
</div>
</div>
</main>

    </>
  );
}
