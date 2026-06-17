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
      

<nav className="fixed w-full top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-slate-900">
                BOWTROL
            </div>
<a className="text-sm font-medium text-[#007AFF] hover:text-[#52E5E7] transition-colors flex items-center gap-2" href="https://healthbuy.com/products/bowtrolprobiotic">
                Order Now <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group hidden md:block">

<div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-slate-200 border-r-0 p-3 rounded-l-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer flex flex-col items-center gap-2 transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0 z-10">
<iconify-icon className="text-[#52E5E7] text-xl" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs tracking-tight font-medium text-slate-400 rotate-180" style={{writingMode: 'vertical-rl'}}>Synergy</span>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-l-2xl p-6 w-80 flex flex-col gap-5 opacity-0 group-hover:opacity-100 z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#007AFF]/20 to-[#52E5E7]/20 flex items-center justify-center">
<iconify-icon className="text-[#007AFF] text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Metabolic Synergy</h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                Accelerate your results. Pair Bowtrol with African Mango for recommended optimal lipid metabolism and gut flora balance.
            </p>

<a className="group/item relative h-32 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden hover:border-orange-200 transition-colors" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
<div className="flex flex-col text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32e352c3-c992-473c-8d22-16a6a76ebee4_800w.png)] bg-cover bg-center z-10 pr-4 pl-4 relative gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-orange-400 text-3xl" icon="solar:leaf-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Bowtrol ProbioticP Companion</span>
</div>
</a>
<a className="text-sm text-center py-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-[#007AFF] font-medium transition-colors border border-slate-200" href="https://healthbuy.com/products/bowtrolprobiotic">
                View Protocol
            </a>
</div>
</div>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[#007AFF]/5 to-transparent blur-3xl -z-10 rounded-full"></div>
<div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-l from-[#52E5E7]/10 to-transparent blur-3xl -z-10 rounded-full"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-6 md:gap-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 w-fit">
<span className="w-2 h-2 rounded-full bg-[#52E5E7] animate-pulse"></span>
<span className="text-xs font-medium tracking-tight text-slate-600">Clinical-Grade Formulation</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                    Is Your Microbiome Keeping Pace With Your Lifestyle?
                </h1>
<p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-xl">
                    Stop treating symptoms and start optimizing your gut-brain axis. 10 Billion CFUs of clinical-grade Lactobacillus Sporogenes designed for the high-performance American life.
                </p>
<div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="w-full sm:w-auto text-center btn-gloss-pulse text-white text-sm md:text-base font-medium px-8 py-4 rounded-full border border-white/20 transition-all duration-300" href="https://healthbuy.com/products/bowtrolprobiotic">
                        CLAIM MY BIO-POTENT SUPPLY NOW
                    </a>
<span className="text-xs text-slate-400 flex items-center gap-1 mt-2 sm:mt-0">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Lab Verified
                    </span>
</div>
</div>

<div className="md:h-[500px] flex lg:justify-end w-full h-[400px] z-10 relative items-center justify-center">
<div className="relative w-64 h-80 animate-float cursor-pointer group" onclick="window.location.href='https://healthbuy.com/products/bowtrolprobiotic'">

<div className="absolute inset-0 bg-gradient-to-tr from-[#007AFF]/20 to-[#52E5E7]/20 blur-2xl rounded-full group-hover:scale-110 transition-transform duration-500"></div>

<div className="flex flex-col overflow-hidden bg-center bg-white/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f65bf5c-8cd4-4ccd-a254-6b00c1822890_800w.webp)] bg-cover border-white/60 border rounded-3xl pb-8 absolute top-0 right-0 bottom-0 left-0 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl scale-110 items-center justify-end">

<div className="absolute top-0 left-4 w-8 h-full bg-gradient-to-r from-white/40 to-transparent -rotate-12 blur-sm"></div>

</div>


<div className="data-point-3 absolute right-4 -bottom-6 bg-white p-2 rounded-full border border-slate-100 shadow-lg flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-[#007AFF] text-lg" icon="solar:verified-check-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">Discover Your Gut Profile</h2>
<p className="text-sm md:text-base text-slate-500">Select the statements that align with your current experience.</p>
</div>
<div className="flex flex-col gap-4">

<label className="group relative bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer hover:shadow-[0_0_20px_rgba(82,229,231,0.2)] hover:border-[#52E5E7]/50 transition-all duration-300 flex items-start gap-4">
<div className="pt-1">
<input className="quiz-radio" type="checkbox"/>
</div>
<div className="">
<h3 className="text-sm font-medium text-slate-900 mb-1 group-hover:text-[#007AFF] transition-colors">Post-Workout</h3>
<p className="text-sm text-slate-500">Do you experience digestive sluggishness or "bloat" immediately after your exercise routine?</p>
</div>
</label>

<label className="group relative bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer hover:shadow-[0_0_20px_rgba(82,229,231,0.2)] hover:border-[#52E5E7]/50 transition-all duration-300 flex items-start gap-4">
<div className="pt-1">
<input className="quiz-radio" type="checkbox"/>
</div>
<div className="">
<h3 className="text-sm font-medium text-slate-900 mb-1 group-hover:text-[#007AFF] transition-colors">Recovery</h3>
<p className="text-sm text-slate-500">Have you recently finished a round of medication and noticed your energy levels haven't fully bounced back?</p>
</div>
</label>

<label className="group relative bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer hover:shadow-[0_0_20px_rgba(82,229,231,0.2)] hover:border-[#52E5E7]/50 transition-all duration-300 flex items-start gap-4">
<div className="pt-1">
<input className="quiz-radio" type="checkbox"/>
</div>
<div className="">
<h3 className="text-sm font-medium text-slate-900 mb-1 group-hover:text-[#007AFF] transition-colors">The Gut-Burn</h3>
<p className="text-sm text-slate-500">Do you feel "off-balance" after eating common restaurant or processed foods?</p>
</div>
</label>

<label className="group relative bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer hover:shadow-[0_0_20px_rgba(82,229,231,0.2)] hover:border-[#52E5E7]/50 transition-all duration-300 flex items-start gap-4">
<div className="pt-1">
<input className="quiz-radio" type="checkbox"/>
</div>
<div className="">
<h3 className="text-sm font-medium text-slate-900 mb-1 group-hover:text-[#007AFF] transition-colors">Stability</h3>
<p className="text-sm text-slate-500">Are you looking for a probiotic that is lab-verified to survive harsh stomach acids?</p>
</div>
</label>

<a className="block w-full text-center mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#007AFF]/5 to-[#52E5E7]/5 border border-[#007AFF]/20 hover:border-[#007AFF]/50 hover:bg-white transition-all duration-300 group" href="https://healthbuy.com/products/bowtrolprobiotic">
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Readiness Check</h3>
<p className="text-sm text-[#007AFF] font-medium flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform">
                        Are you ready to deploy 10 Billion CFUs of targeted digestive defense today? 
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">The Bowtrol Edge: Beyond Basic Digestion</h2>
<div className="h-1 w-12 bg-gradient-to-r from-[#007AFF] to-[#52E5E7] mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#007AFF]/30 hover:shadow-[0_10px_40px_rgba(0,122,255,0.08)] transition-all duration-500">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#007AFF]/5 group-hover:border-[#007AFF]/20 transition-colors">
<iconify-icon className="text-2xl text-[#007AFF]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Acid-Resistant Strain</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Engineered to bypass initial gastric destruction. Survives the harsh digestive journey to deploy active cultures exactly where your body needs them.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#52E5E7]/50 hover:shadow-[0_10px_40px_rgba(82,229,231,0.08)] transition-all duration-500">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#52E5E7]/5 group-hover:border-[#52E5E7]/20 transition-colors">
<iconify-icon className="text-2xl text-[#52E5E7]" icon="solar:drop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Lactose Optimization</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Features targeted enzymatic support that assists the body in efficiently processing dairy, reducing discomfort and metabolic friction.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#007AFF]/30 hover:shadow-[0_10px_40px_rgba(0,122,255,0.08)] transition-all duration-500">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#007AFF]/5 group-hover:to-[#52E5E7]/5 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-[#007AFF] transition-colors" icon="solar:pulse-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Total Systemic Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        With 70% of the US immune system localized in the gut, a balanced microbiome is the foundation for whole-body readiness and defense.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#52E5E7 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-center mb-16">Real Results from Verified Users</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="flex items-center gap-1 mb-4 text-[#52E5E7]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                        "I've tried generic brands for years. Bowtrol is the first time I've noticed a clinical difference. <span className="font-medium text-white">No more mid-day bloat</span> after heavy lunches."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium border border-white/10">M</div>
<div>
<div className="text-xs font-medium">Michael T.</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest">Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="flex items-center gap-1 mb-4 text-[#52E5E7]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                        "Post-antibiotics, my system was a wreck. Within two weeks on this protocol, I <span className="font-medium text-white">finally felt light again</span>. My energy is back to baseline."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium border border-white/10">S</div>
<div>
<div className="text-xs font-medium">Sarah J.</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest">Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors md:col-span-2 lg:col-span-1">
<div className="flex items-center gap-1 mb-4 text-[#52E5E7]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                        "The lactose optimization is real. I can process dairy much easier now. It feels like a <span className="font-medium text-white">system upgrade</span> for my digestion."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium border border-white/10">D</div>
<div>
<div className="text-xs font-medium">David R.</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-32 pb-20 px-6 bg-white relative">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center">
<iconify-icon className="text-4xl text-[#007AFF] mb-6" icon="solar:health-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                Optimize Your Internal Ecosystem
            </h2>
<p className="text-sm md:text-base text-slate-500 mb-10 max-w-xl">
                Join thousands of high-performers who have made the switch to clinical-grade gut support. Secure your supply today and establish a new baseline.
            </p>
<a className="w-full sm:w-auto btn-gloss-pulse text-white text-base font-medium px-10 py-5 rounded-full flex items-center justify-center gap-3" href="https://healthbuy.com/products/bowtrolprobiotic">
                CLAIM MY BIO-POTENT SUPPLY NOW
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="mt-8 flex items-center justify-center gap-6 opacity-60 grayscale">

<div className="flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium">Secure Checkout</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:flask-linear"></iconify-icon>
<span className="text-xs font-medium">Lab Tested</span>
</div>
</div>
<div className="mt-24 pt-8 border-t border-slate-100 w-full text-center">
<div className="text-lg font-medium tracking-tighter text-slate-300 mb-4">
                    BOWTROL
                </div>
<p className="text-xs text-slate-400">
                    © 2024 Bowtrol Probiotic. All rights reserved.<br/>
                    *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
</div>
</div>
</footer>

    </>
  );
}
