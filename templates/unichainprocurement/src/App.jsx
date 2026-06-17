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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'], // Proxy for Codec Pro
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#f8fafc',
900: '#020617',
950: '#000000',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="20" data-icon="lucide:layers" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="font-serif text-lg tracking-tight text-white font-medium">UniChain</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Platform</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#metrics">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Sign in</a>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded hover:bg-slate-200 transition-colors">
                    Request Demo
                </button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden hero-gradient border-white/5 border-b pt-32 pb-20 relative">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-indigo-300 tracking-wide" style={{}}>AI-Native Procurement Platform for manufacturers</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl text-white tracking-tight font-serif mb-8" style={{}}>Supply chain control <br/> <span className="italic text-slate-400">without the chaos.</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">Unify ERPs and email into a single source of truth. Automate status tracking, spend analysis, and risk monitoring for manufacturing.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black h-12 px-8 rounded flex items-center justify-center gap-2 text-sm font-medium hover:bg-slate-200 transition-all">
                    Start Deployment
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded border border-white/10 text-slate-300 flex items-center justify-center gap-2 text-sm font-medium hover:bg-white/5 transition-all">
                    View Interactive Demo
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</button>
</div>
<div className="mt-12 flex items-center justify-center gap-8 text-xs text-slate-500 font-medium tracking-widest uppercase">
<span className="">NetSuite</span>
<span>SAP Business One</span>
<span>Sage</span>
<span>QuickBooks Enterprise</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[1200px] h-[600px] opacity-20 pointer-events-none">
<div className="w-full h-full border border-white/10 rounded-xl bg-slate-900/50 backdrop-blur-3xl rotate-x-12 transform-gpu"></div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-brand-950" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="h-10 w-10 rounded bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:database" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="font-serif text-xl text-white mb-3">Unified Data View</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Eliminate the 60% of time wasted on manual data processing. We pull POs, invoices, and supplier emails into one dashboard without custom code.
                    </p>
</div>

<div className="group p-8 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="h-10 w-10 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:activity" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl text-white mb-3">Real-Time Status</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Stop asking "Where's my order?" Visualize production status, shipments, and delays instantly. Reduce firefighting by 40%.
                    </p>
</div>

<div className="group p-8 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="h-10 w-10 rounded bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="font-serif text-xl text-white mb-3">Spend Intelligence</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Negotiate with leverage using 3-year price trends and benchmarking. Identify 10-45% cost savings opportunities immediately.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">Enterprise automation.<br/>SME agility.</h2>
<p className="text-slate-400 max-w-xl font-light">Deploy in under 30 days. No heavy IT lifting required.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-8 glass-panel rounded overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none"></div>
<div className="p-8 relative z-20">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-medium flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:radar" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"></path><path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59l5.66-5.66"></path></g></svg>
                                Live PO Tracking
                            </h3>
<span className="text-xs text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 rounded">Live Sync Active</span>
</div>

<div className="w-full text-xs text-left text-slate-400 font-mono mt-6">
<div className="grid grid-cols-5 gap-4 pb-2 border-b border-white/10 uppercase tracking-wider text-[10px]">
<div>PO Number</div>
<div className="">Supplier</div>
<div>Expected</div>
<div>Value</div>
<div>Status</div>
</div>
<div className="grid grid-cols-5 gap-4 py-3 border-b border-white/5 items-center">
<div className="text-white">PO-2491</div>
<div className="">Acme Mfg</div>
<div className="">Oct 24</div>
<div>$12,400</div>
<div><span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Shipped</span></div>
</div>
<div className="grid grid-cols-5 gap-4 py-3 border-b border-white/5 items-center">
<div className="text-white">PO-2492</div>
<div className="">Global Steel</div>
<div className="">Nov 02</div>
<div>$45,250</div>
<div><span className="text-amber-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>In Prod</span></div>
</div>
<div className="grid grid-cols-5 gap-4 py-3 border-b border-white/5 items-center">
<div className="text-white">PO-2493</div>
<div className="">TechComponents</div>
<div className="text-red-400">Oct 18</div>
<div>$8,100</div>
<div><span className="text-red-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>Delayed</span></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 glass-panel rounded p-8 relative overflow-hidden flex flex-col justify-between">
<div>
<div className="h-10 w-10 rounded border border-white/10 bg-white/5 flex items-center justify-center mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:mail" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<h3 className="text-white font-medium mb-2">Email to Data</h3>
<p className="text-sm text-slate-400">
                            Our AI parses order confirmations and invoices directly from your inbox, updating your ERP automatically.
                        </p>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5">
<div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-300 font-bold">G</div>
<div className="flex-1">
<div className="h-2 w-16 bg-white/20 rounded mb-1"></div>
<div className="h-1.5 w-24 bg-white/10 rounded"></div>
</div>
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5 opacity-60">
<div className="h-8 w-8 rounded-full bg-blue-700/20 flex items-center justify-center text-xs text-blue-300 font-bold">O</div>
<div className="flex-1">
<div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
<div className="h-1.5 w-12 bg-white/10 rounded"></div>
</div>
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</div>
</div>

<div className="md:col-span-4 glass-panel rounded p-8 flex flex-col">
<h3 className="text-white font-medium mb-1">Supplier Scorecards</h3>
<p className="text-xs text-slate-500 mb-6">Data-driven performance tracking.</p>
<div className="flex-1 flex flex-col gap-4">
<div className="flex justify-between items-end">
<span className="text-sm text-slate-300">On-Time Delivery</span>
<span className="text-lg font-mono text-emerald-400">94%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[94%]"></div>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-sm text-slate-300">Quality Rate</span>
<span className="text-lg font-mono text-amber-400">88%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[88%]"></div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-triangle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Risk detected: 2 late shipments</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-8 glass-panel rounded p-8 relative">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-white font-medium">Price History Analysis</h3>
<p className="text-sm text-slate-400">Historical benchmarking for negotiation leverage.</p>
</div>

<div className="flex items-center gap-2">
<span className="text-xs text-slate-500">Quotes</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-700" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-800 cursor-pointer border border-white/10" htmlFor="toggle"></label>
</div>
</div>
</div>

<div className="h-48 w-full flex items-end justify-between gap-2 px-2 border-b border-l border-white/10 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>

<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[40%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100">$120</div>
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[55%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100">$145</div>
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[45%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100">$130</div>
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[30%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100">$110</div>
</div>

<div className="absolute left-0 right-0 top-[60%] border-t border-dashed border-emerald-400/50 flex items-center">
<span className="text-[10px] text-emerald-400 -mt-4 ml-1">Market Avg</span>
</div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 mt-2 px-2">
<span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-brand-900" id="metrics">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
<div>
<div className="font-serif text-4xl md:text-5xl text-white mb-2">30%</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Time Reduction</p>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl text-white mb-2">45%</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Savings Potential</p>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl text-white mb-2">&lt;30</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Days Deployment</p>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl text-white mb-2">5x</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">ROI in Year 1</p>
</div>
</div>
</div>
</section>

<section className="py-32 text-center relative overflow-hidden">
<div className="absolute inset-0 hero-gradient opacity-30"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Ready to regain control?</h2>
<p className="text-slate-400 mb-10 font-light text-lg">
                Join the manufacturing SMEs saving thousands by automating procurement visibility and insights.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="bg-white text-black h-12 px-10 rounded text-sm font-medium hover:bg-slate-200 transition-all w-full sm:w-auto">
                    Book a Discovery Call
                </button>
<span className="text-xs text-slate-600">No credit card required • SOC2 Compliant Security</span>
</div>
</div>
</section>
<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:layers" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="font-serif text-slate-300 tracking-tight">UniChain</span>
</div>
<div className="flex gap-8 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-slate-700">
                © 2024 UniChain Systems Inc.
            </div>
</div>
</footer>

    </>
  );
}
