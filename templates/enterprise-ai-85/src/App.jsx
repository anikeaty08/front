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
      

<div className="aura-background-component top-0 w-full -z-10 absolute saturate-0 opacity-40 h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/celestialflowabstractdigitalform-ObUlVgj70g2y4bbx5vBKSfxN/" width="100%"></iframe></div></div>

<nav className="w-full py-8 px-6 lg:px-12 flex items-center justify-between relative z-50 max-w-[1600px] mx-auto">
<a className="text-2xl lg:text-3xl font-serif font-medium text-[#43436A] tracking-tight uppercase" href="#">Lumin Insight</a>
<div className="hidden lg:flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-sm border border-gray-100">
<a className="text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Approach</a>
<a className="text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Results</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Start Efficiency Audit</a>
<button className="w-10 h-10 rounded-full border border-[#FF7F66] text-[#FF7F66] flex items-center justify-center hover:bg-[#FF7F66] hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>

<section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 pt-10 lg:pt-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-10">
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-[#43436A] leading-[1.1] tracking-tight">
                    Automate High-Friction <br/>
<span className="italic font-light">Operational Workflows.</span>
</h1>
<div className="flex items-start gap-6 max-w-lg">
<div className="w-12 h-12 flex-shrink-0 bg-indigo-50 rounded-xl flex items-center justify-center text-[#5D5D81]">
<iconify-icon height="24" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-slate-500">
                        We deploy digital workers to handle the manual tasks that slow down your business. Compatible with your existing legacy systems.
                    </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
<a className="px-8 py-4 rounded-full border border-[#FF7F66] text-[#43436A] font-medium text-xs tracking-widest uppercase hover:bg-[#FF7F66] hover:text-white transition-colors flex items-center gap-3" href="#">
                        Start Efficiency Audit <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<span className="text-xs font-medium text-slate-400 tracking-wide uppercase">Stop paying for seats. <br/>Pay for completed work.</span>
</div>
<div className="flex gap-4 pt-12">
<div className="w-3 h-3 rounded-full bg-[#FF7F66] ring-4 ring-[#FF7F66]/20"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
</div>
</div>

</div>
</section>

<section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col justify-center space-y-8">
<span className="text-xs font-medium tracking-[0.2em] text-[#FF7F66] uppercase">Why Lumin</span>
<h2 className="text-4xl lg:text-5xl font-serif text-[#43436A] tracking-tight leading-tight">
                    Engineered for <br/>Business Efficiency.
                </h2>
<div className="w-12 h-0.5 bg-[#FF7F66]"></div>
<p className="text-lg text-slate-500 leading-relaxed">
                    We solve business inefficiency by deploying sovereign AI agents. No ripping and replacing your core infrastructure.
                </p>
<div className="pt-4">
<a className="inline-flex px-8 py-4 rounded-full border border-gray-300 text-[#43436A] font-medium text-xs tracking-widest uppercase hover:border-[#FF7F66] transition-colors" href="#">
                        How it works
                    </a>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">

<div className="aspect-square flex flex-col group hover:bg-white transition-colors text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_1600w.webp)] bg-cover bg-center border-gray-100 border-r border-b px-12 py-12 items-center justify-center relative">
<div className="absolute inset-0 bg-white/90 group-hover:bg-white/95 transition-all"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-[#43436A] mb-6 transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="60" icon="solar:bill-check-linear" strokeWidth="1.5" width="60"></iconify-icon>
</div>
<span className="text-xs text-gray-400 mb-2 font-mono">01</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-[#43436A] mb-2">The Outcome Model</h3>
<p className="text-sm text-slate-500 px-4">Pay for the result, not the tool.</p>
</div>
</div>

<div className="aspect-square flex flex-col group hover:bg-white transition-colors text-center bg-gray-50 border-gray-100 border-b px-12 py-12 items-center justify-center">
<div className="text-[#43436A] mb-6 transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="60" icon="solar:link-circle-linear" strokeWidth="1.5" width="60"></iconify-icon>
</div>
<span className="text-xs text-gray-400 mb-2 font-mono">02</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-[#43436A] mb-2">Zero Integration Risk</h3>
<p className="text-sm text-slate-500 px-4">Works with SAP, Oracle, Excel.</p>
</div>

<div className="aspect-square flex flex-col overflow-hidden text-center bg-[#43436A] px-12 py-12 relative items-center justify-center">
<div className="text-white mb-6 z-10">
<iconify-icon height="60" icon="solar:shield-check-linear" strokeWidth="1.5" width="60"></iconify-icon>
</div>
<span className="text-xs text-white/70 mb-2 font-mono z-10">03</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-white z-10 mb-2">Sovereign &amp; Secure</h3>
<p className="text-sm text-white/70 px-4 z-10">Data stays on your infrastructure.</p>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
</div>

<div className="aspect-square flex flex-col group hover:bg-white transition-colors text-center bg-white border-gray-100 border-r px-12 py-12 items-center justify-center">
<div className="text-[#43436A] mb-6 transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="60" icon="solar:rocket-linear" strokeWidth="1.5" width="60"></iconify-icon>
</div>
<span className="text-xs text-gray-400 mb-2 font-mono">04</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-[#43436A] mb-2">Speed to Value</h3>
<p className="text-sm text-slate-500 px-4">Deployment in weeks, not months.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden w-full pt-24 pb-24 bg-white">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-12 flex items-end justify-between">
<div className="">
<span className="text-xs font-medium tracking-[0.2em] text-[#FF7F66] uppercase block mb-4">The Engagement</span>
<h2 className="text-4xl lg:text-5xl font-serif text-[#43436A] tracking-tight">
                    The Operational <br/> Decomposition Audit.
                </h2>
</div>
<div className="hidden md:flex items-baseline gap-4 font-serif">
<span className="text-7xl text-[#43436A]">10</span>
<span className="text-4xl text-gray-300"> Days</span>
</div>
</div>
<div className="relative w-full h-[500px] lg:h-[600px] group">

<div className="absolute inset-0 w-full h-full bg-[#E5E0D8]">
<img alt="Abstract Art" className="w-full h-full object-cover opacity-90 grayscale-[0.5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f65e15e-948a-4d3e-9f34-a22e812f9c9e_3840w.webp"/>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFF8F0] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-[#4A3B32]/10 backdrop-blur-sm bg-opacity-95">
<div className="text-[#FF7F66] text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">Fixed Fee Guarantee</div>
<div className="text-[#43436A] text-6xl mb-2">
<iconify-icon height="1em" icon="solar:document-add-linear" strokeWidth="1" width="1em"></iconify-icon>
</div>
<div className="text-[#43436A] text-sm font-medium tracking-widest uppercase mt-2 font-serif text-center px-8">Book Audit</div>
</div>

<button className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20">
<iconify-icon className="text-[#43436A]" height="24" icon="solar:arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#FF7F66] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20 text-white">
<iconify-icon height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-6">
<p className="leading-relaxed text-lg text-slate-500 max-w-xl">
                    Before we build, we map your friction. A 2-week engagement to identify exactly where your team is wasting time on manual data entry.
                </p>
<div className="mt-8">
<a className="inline-flex px-8 py-4 rounded-full border border-gray-300 text-[#43436A] font-medium text-xs tracking-widest uppercase hover:border-[#FF7F66] transition-colors" href="#">
                        Book Decomposition Audit
                    </a>
</div>
</div>
<div className="md:col-span-3">
<span className="text-[10px] font-bold text-[#FF7F66] uppercase tracking-widest mb-4 block">Deliverable</span>
<p className="text-lg text-[#43436A]">Blueprint &amp; ROI Forecast</p>
<div className="w-8 h-0.5 bg-[#FF7F66] mt-6"></div>
</div>
<div className="md:col-span-3">
<span className="text-[10px] font-bold text-[#FF7F66] uppercase tracking-widest mb-4 block">Timeline</span>
<p className="text-lg text-[#43436A]">10-Day Sprint</p>
<div className="w-8 h-0.5 bg-[#FF7F66] mt-6"></div>
</div>
</div>
</section>

<section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-32 bg-[#FAFAFA]">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
<div className="max-w-2xl">
<span className="text-xs font-medium tracking-[0.2em] text-[#FF7F66] uppercase block mb-4">Process</span>
<h2 className="text-4xl lg:text-5xl font-serif text-[#43436A] tracking-tight leading-tight">
                    The Decomposition <br/>Cycle.
                </h2>
</div>
<div className="max-w-md">
<p className="text-lg text-slate-500 leading-relaxed">
                    Our process is designed to be rigorous. We transform complex legacy problems into intuitive, high-performance automated workflows.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 overflow-hidden rounded-sm">

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">01</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">Ingestion</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    We deep-dive into your database topology. Mapping legacy constraints, schema, and security requirements.
                </p>
</div>

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">02</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">Friction Mapping</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    Identifying the "swivel chair" interfaces—exact points where your team manually copies data between systems.
                </p>
</div>

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">03</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">Architecture</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    Designing the sovereign solution. Air-gapped agents, local inference, and PII redaction layers.
                </p>
</div>

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">04</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">ROI Forecast</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    Deterministic calculation of value. We forecast exactly how many hours and dollars will be saved.
                </p>
</div>
</div>
</section>

<footer className="w-full mt-12 bg-white">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-100">
<a className="text-2xl font-serif font-medium text-[#FF7F66] mb-6 md:mb-0 uppercase tracking-wide" href="#">Lumin Insight</a>
<div className="flex gap-8 mb-6 md:mb-0">
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Solutions</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Approach</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Results</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Contact</a>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-400 text-lg hover:bg-indigo-100 cursor-pointer">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-400 text-lg hover:bg-indigo-100 cursor-pointer">
<iconify-icon icon="solar:brand-linkedin-linear"></iconify-icon>
</div>
</div>
</div>
<div className="w-full py-12 px-6 lg:px-12 bg-slate-900">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-white/60 text-xs">
<div className="mb-4 md:mb-0">
<p className="text-white mb-2 font-medium tracking-wide">Engineered for Business Efficiency.</p>
<p>Vilnius, Lithuania.</p>
</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
