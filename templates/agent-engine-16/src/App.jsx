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



      (function(){ 
        var el = document.getElementById('y'); 
        if (el) el.textContent = new Date().getFullYear(); 
      })();
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_15%_-10%,#0ea5e91a,transparent),radial-gradient(700px_300px_at_85%_0%,#6366f11a,transparent),radial-gradient(900px_500px_at_50%_120%,#06b6d41a,transparent)]"></div>
<div className="absolute inset-0 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(0deg,transparent_24%,#000_25%,#000_26%,transparent_27%,transparent_74%,#000_75%,#000_76%,transparent_77%),linear-gradient(90deg,transparent_24%,#000_25%,#000_26%,transparent_27%,transparent_74%,#000_75%,#000_76%,transparent_77%)] bg-[length:16px_16px]"></div>
</div>

<header className="sticky top-0 z-40 bg-white/60 backdrop-blur-xl border-b border-white/20 ring-1 ring-slate-900/5 snap-start">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center ring-1 ring-white/20 group-hover:ring-white/30 transition-all tracking-tight" style={{letterSpacing: '-0.02em'}}>
              AE
            </div>
<span className="text-sm md:text-base font-semibold tracking-tight">Agent Engine</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
<a className="hover:text-slate-900 transition-colors" href="#product">Product</a>
<a className="hover:text-slate-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#docs">Docs</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/60 backdrop-blur-xl text-slate-900 text-sm px-4 py-2.5 ring-1 ring-white/30 hover:bg-white/70 hover:ring-white/40 transition-colors" href="#contact">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
</svg>
              Request demo
            </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-white/30 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition">
<svg className="h-5 w-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</header>

<section className="relative snap-start">

<div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-30 bg-[conic-gradient(from_180deg_at_50%_50%,#0ea5e922_0deg,#6366f122_180deg,#06b6d422_360deg)]"></div>
<div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="absolute -inset-2 -z-10 rounded-2xl bg-white/0"></div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Deploy AI agents that work like your best team — at scale.
            </h1>
<p className="mt-5 text-base sm:text-lg text-slate-600">
              Spin up reliable, compliant AI agents for support, sales, ops, and more. Integrate in minutes, govern with precision, and measure outcomes, not tokens.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900/90 text-white text-sm px-5 py-3 ring-1 ring-black/10 hover:bg-slate-900 hover:ring-black/20 transition will-change-transform hover:-translate-y-0.5" href="#signup">
                Get started free
                <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/60 backdrop-blur-xl text-slate-900 text-sm px-5 py-3 ring-1 ring-white/30 hover:bg-white/70 hover:ring-white/40 transition will-change-transform hover:-translate-y-0.5" href="#contact">
                Talk to sales
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h4l4 4"></path>
<path d="M12 8v8"></path>
</svg>
</a>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Customer avatar" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Customer avatar" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Customer avatar" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600">
                Trusted by 1,200+ teams globally
              </p>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/30 shadow-sm bg-white/40 backdrop-blur-xl">
<img alt="Abstract AI systems render" className="w-full h-[420px] object-cover" src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-white/60 backdrop-blur-xl border-t border-white/30 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center ring-1 ring-white/20">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="14" rx="2" width="18" x="3" y="4"></rect>
<path d="M2 20h20"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium">Live agent: Support</p>
<p className="text-xs text-slate-600">Deflection 63% · CSAT 4.8</p>
</div>
</div>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-white/60 backdrop-blur-xl ring-1 ring-white/30 hover:ring-white/40 hover:bg-white/70 transition">
<svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M5 19h14"></path></svg>
                  View dashboard
                </button>
</div>
</div>
</div>
</div>

<div className="mt-14 border-t border-white/20 pt-6">
<p className="text-xs uppercase tracking-wide text-slate-500">Trusted by modern teams</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
<div className="h-12 rounded-lg ring-1 ring-white/30 bg-white/60 backdrop-blur-xl flex items-center justify-center text-slate-700 hover:ring-white/40 hover:bg-white/ transition tracking-tight" style={{letterSpacing: '-0.02em'}}>ALTA</div>
<div className="h-12-lg ring-1 ring-white/30 bg-white/60 backdrop-blur-xl flex items-center justify-center text-slate-700 hover:ring-white/40 hover:bg-white/70 transition">NOVA</div>
<div className="h-12 rounded-lg ring-1 ring-white/30 bg-white/60 backdrop-blur-xl flex items-center justify-center text-slate-700 hover:ring-white/40 hover:bg-white/70 transition">PICO</div>
<div className="h-12 rounded-lg ring-1 ring-white/30 bg-white/60 backdrop-blur-xl flex items-center justify-center text-slate-700 hover:ring-white/40 hover:bg-white/70 transition">CORTEX</div>
<div className="h-12 rounded-lg ring-1 ring-white/30 bg-white/60 backdrop-blur-xl flex items-center justify-center text-slate-700 hover:ring-white/40 hover:bg-white/70 transition">VEGA</div>
<div className="h-12 rounded-lg ring-1 ring-white/30 bg-white/60 backdrop-blur-xl flex items-center justify-center text-slate-700 hover:ring-white/40 hover:bg-white/70 transition">NIMBUS</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 md:py-24 snap-start" id="product">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="col-span-1 lg:col-span-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Agents you can deploy with confidence.</h2>
<p className="mt-3 text-slate-600">Composable tools, policy controls, and observability to scale across functions.</p>
</div>
<div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl ring-1 ring-white/30 p-6 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5">
<div className="h-10 w-10 rounded-md bg-white/60 backdrop-blur-xl ring-1 ring-white/30 flex items-center justify-center text-slate-900 mb-4">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Orchestrate multi-agent workflows</h3>
<p className="mt-2 text-sm text-slate-600">Design complex flows with tools, memory, and guardrails. Coordinate handoffs between agents and humans.</p>
</div>
<div className="rounded-xl ring-1 ring-white/30 p-6 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5">
<div className="h-10 w-10 rounded-md bg-white/60 backdrop-blur-xl ring-1 ring-white/30 flex items-center justify-center text-slate-900 mb-4">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Secure by design</h3>
<p className="mt-2 text-sm text-slate-600">PII redaction, role-based controls, audit trails, and model routing with policy enforcement.</p>
</div>
<div className="rounded-xl ring-1 ring-white/30 p-6 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5">
<div className="h-10 w-10 rounded-md bg-white/60 backdrop-blur-xl ring-1 ring-white/30 flex items-center justify-center text-slate-900 mb-4">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01"></path><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 3.2l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .68.27 1.33.75 1.82.48.49 1.14.76 1.82.76"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Integrate with your stack</h3>
<p className="mt-2 text-sm text-slate-600">SDKs, APIs, and connectors for CRM, help desk, data warehouses, and custom tools.</p>
</div>
<div className="rounded-xl ring-1 ring-white/30 p-6 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5">
<div className="h-10 w-10 rounded-md bg-white/60 backdrop-blur-xl ring-1 ring-white/30 flex items-center justify-center text-slate-900 mb-4">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 9.5A7.5 7.5 0 1 1 11.5 2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Measure and optimize</h3>
<p className="mt-2 text-sm text-slate-600">Experiment, A/B flows, and track business KPIs like deflection, conversion, and cycle time.</p>
</div>
</div>
</div>
</section>

<section className="bg-transparent snap-start" id="solutions">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From idea to production in days, not months.</h2>
<ul className="mt-6 space-y-5">
<li className="flex gap-4">
<div className="h-9 w-9 rounded-md bg-white/60 backdrop-blur-xl ring-1 ring-white/30 flex items-center justify-center text-slate-900">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-6"></path><path d="M7 10h10"></path><path d="M5 20h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2Z"></path></svg>
</div>
<div>
<p className="text-base font-medium tracking-tight">Design your agent</p>
<p className="text-sm text-slate-600">Define goals, tools, and policies in a visual builder or via code.</p>
</div>
</li>
<li className="flex gap-4">
<div className="h-9 w-9 rounded-md bg-white/60 backdrop-blur-xl ring-1 ring-white/30 flex items-center justify-center text-slate-900">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path></svg>
</div>
<div>
<p className="text-base font-medium tracking-tight">Connect data + tools</p>
<p className="text-sm text-slate-600">Secure connectors for ticketing, CRM, knowledge bases, and internal APIs.</p>
</div>
</li>
<li className="flex gap-4">
<div className="h-9 w-9 rounded-md bg-white/60 backdrop-blur-xl ring-1 ring-white/30 flex items-center justify-center text-slate-900">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>
</div>
<div>
<p className="text-base font-medium tracking-tight">Launch and observe</p>
<p className="text-sm text-slate-600">Ship to channels with one click. Monitor outcomes and iterate safely.</p>
</div>
</li>
</ul>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm rounded-lg px-4 py-2.5 bg-white/60 backdrop-blur-xl ring-1 ring-white/30 hover:bg-white/70 hover:ring-white/40 transition" href="#docs">
<svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V7a2 2 0 0 0-2-2h-7"></path><path d="M20 21H8a2 2 0 0 1-2-2V5"></path><path d="M3 3h7v7"></path></svg>
                Read docs
              </a>
<a className="inline-flex items-center gap-2 text-sm rounded-lg px-4 py-2.5 bg-slate-900/90 text-white ring-1 ring-black/10 hover:bg-slate-900 hover:ring-black/20 transition" href="#templates">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>
                Browse templates
              </a>
</div>
</div>
<div className="order-1 md:order-2">
<div className="rounded-2xl ring-1 ring-white/30 p-4 md:p-6 bg-white/60 backdrop-blur-xl shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center ring-1 ring-white/20">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.1 0-2 .9-2 2v1H8v3h2v5h3v-5h2.1l.4-3H13v-1c0-.3.2-1 1-1h1V8h-3z"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Support Agent</p>
<p className="text-xs text-slate-600">Zendesk · Notion KB · API Tools</p>
</div>
</div>
<span className="text-xs text-emerald-600 bg-emerald-50 ring-1 ring-emerald-100 px-2 py-1 rounded-md">Live</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg ring-1 ring-white/30 p-3 bg-white/60 backdrop-blur-xl">
<p className="text-xs text-slate-500">Deflection</p>
<p className="text-lg font-medium tracking-tight">63%</p>
<div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-slate-900"></div>
</div>
</div>
<div className="rounded-lg ring-1 ring-white/30 p-3 bg-white/60 backdrop-blur-xl">
<p className="text-xs text-slate-500">Avg Handle Time</p>
<p className="text-lg font-medium tracking-tight">1m 12s</p>
<div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-slate-900"></div>
</div>
</div>
<div className="rounded-lg ring-1 ring-white/30 p-3 bg-white/60 backdrop-blur-xl">
<p className="text-xs text-slate-500">CSAT</p>
<p className="text-lg font-medium tracking-tight">4.8/5</p>
</div>
<div className="rounded-lg ring-1 ring-white/30 p-3 bg-white/60 backdrop-blur-xl">
<p className="text-xs text-slate-500">Coverage</p>
<p className="text-lg font-medium tracking-tight">92%</p>
</div>
</div>
<div className="mt-4 rounded-lg ring-1 ring-white/30 overflow-hidden bg-white/60 backdrop-blur-xl">
<div className="bg-slate-50/60 px-3 py-2 border-b border-white/30 text-xs text-slate-500">Policy · Redaction · Routing</div>
<div className="p-3 text-xs">
<div className="flex items-center gap-2 mb-2">
<svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg>
                    Enforce PII redaction
                  </div>
<div className="flex items-center gap-2 mb-2">
<svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="m9 18 6-6-6-6"></path></svg>
                    Route billing questions to GPT-4o, general to Mixtral
                  </div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h10v10H7z"></path></svg>
                    Human review on refunds over $500
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-transparent snap-start">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl ring-1 ring-white/30 p-6 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=250&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Ava Patel</p>
<p className="text-xs text-slate-600">VP Support, Nimbus</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">We launched a support agent in a week and cut tickets by 58% while improving CSAT. The policy layer gives our compliance team confidence.</p>
</div>
<div className="rounded-2xl ring-1 ring-white/30 p-6 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=250&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Jonas Richter</p>
<p className="text-xs text-slate-600">Head of Ops, Vega</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Agents now handle order status, cancellations, and escalations end‑to‑end. Observability makes it easy to iterate.</p>
</div>
<div className="rounded-2xl ring-1 ring-white/30 p-6 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=250&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Maya Chen</p>
<p className="text-xs text-slate-600">Growth Lead, Cortex</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Our sales agent books qualified demos 24/7 and syncs perfectly with our CRM. It’s become a core teammate.</p>
</div>
</div>
</div>
</section>

<section className="bg-transparent snap-start" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="flex flex-col items-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, usage‑aware pricing.</h2>
<p className="mt-3 text-slate-600 text-center max-w-2xl">Start free. Scale predictably with seats, agents, and usage. Annual saves 15%.</p>

<div className="mt-6 flex items-center gap-3">
<span className="text-sm text-slate-600">Monthly</span>
<input className="peer sr-only" id="billing" type="checkbox"/>
<label className="relative inline-flex h-8 w-14 cursor-pointer items-center rounded-full bg-white/60 ring-1 ring-white/30 backdrop-blur-xl transition-colors peer-checked:bg-slate-900" htmlFor="billing">
<span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow ring-1 ring-white/30 transition-transform peer-checked:translate-x-6"></span>
</label>
<span className="text-sm text-slate-600">Annual <span className="ml-1 text-emerald-600 bg-emerald-50 ring-1 ring-emerald-100 px-1.5 py-0.5 rounded">-15%</span></span>
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl ring-1 ring-white/30 bg-white/60 backdrop-blur-xl p-6 hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5 flex flex-col">
<h3 className="text-base font-medium tracking-tight">Starter</h3>
<p className="mt-1 text-sm text-slate-600">Experiment and launch your first agents.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight peer-checked:hidden">$29</span>
<span className="hidden text-3xl font-semibold tracking-tight peer-checked:inline">$24</span>
<span className="text-sm text-slate-600">/seat</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> Up to 2 agents</li>
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> 5K tasks/mo</li>
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> Community support</li>
</ul>
<a className="mt-6 inline-flex justify-center items-center gap-2 rounded-lg bg-white/60 backdrop-blur-xl text-slate-900 text-sm px-4 py-2.5 ring-1 ring-white/30 hover:bg-white/70 hover:ring-white/40 transition" href="#signup">
              Start free
            </a>
</div>

<div className="rounded-2xl ring-1 ring-black/10 bg-slate-900/90 text-white p-6 hover:ring-black/20 transition shadow-sm will-change-transform hover:-translate-y-0.5 flex flex-col relative overflow-hidden backdrop-blur-xl">
<span className="absolute top-3 right-3 text-[10px] uppercase tracking-wide bg-white/10 text-white px-2 py-1 rounded">Most popular</span>
<h3 className="text-base font-medium tracking-tight">Growth</h3>
<p className="mt-1 text-sm text-slate-200">Scale across teams with advanced controls.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight peer-checked:hidden">$79</span>
<span className="hidden text-3xl font-semibold tracking-tight peer-checked:inline">$67</span>
<span className="text-sm text-slate-200">/seat</span>
</div>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> Unlimited agents</li>
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> 50K tasks/mo</li>
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> Policy engine + RBAC</li>
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> Email support</li>
</ul>
<a className="mt-6 inline-flex justify-center items-center gap-2 rounded-lg bg-white text-slate-900 text-sm px-4 py-2.5 ring-1 ring-white/20 hover:bg-slate-50 hover:ring-white/30 transition" href="#signup">
              Choose Growth
            </a>
</div>

<div className="rounded-2xl ring-1 ring-white/30 bg-white/60 backdrop-blur-xl p-6 hover:ring-white/40 hover:bg-white/70 transition shadow-sm will-change-transform hover:-translate-y-0.5 flex flex-col">
<h3 className="text-base font-medium tracking-tight">Enterprise</h3>
<p className="mt-1 text-sm text-slate-600">Security reviews, SLAs, and custom deployment.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">Custom</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> SSO/SAML, SCIM</li>
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> VPC or on‑prem</li>
<li className="flex gap-2"><svg className="h-4 w-4 mt-0.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> Dedicated support &amp; SLAs</li>
</ul>
<a className="mt-6 inline-flex justify-center items-center gap-2 rounded-lg bg-white/60 backdrop-blur-xl text-slate-900 text-sm px-4 py-2.5 ring-1 ring-white/30 hover:bg-white/70 hover:ring-white/40 transition" href="#contact">
              Contact sales
            </a>
</div>
</div>
<p className="mt-4 text-xs text-slate-500 text-center">All plans include observability, sandbox environment, and SDKs.</p>
</div>
</section>

<section className="bg-transparent snap-start">
<div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Questions, answered.</h2>
<div className="mt-8 divide-y divide-white/20 rounded-2xl ring-1 ring-white/30 bg-white/60 backdrop-blur-xl overflow-hidden">
<details className="group open:bg-white/60 backdrop-blur-xl">
<summary className="list-none cursor-pointer px-6 py-4 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">How do you ensure data privacy?</span>
<svg className="h-4 w-4 text-slate-700 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-4 text-sm text-slate-600">We support redaction at ingress, field‑level permissions, encrypted storage, and regional processing. Enterprise plans include VPC and on‑prem.</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-6 py-4 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">Which models are supported?</span>
<svg className="h-4 w-4 text-slate-700 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-4 text-sm text-slate-600">Bring your own keys for leading providers. Route per task with policy and fallback for reliability.</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-6 py-4 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">Do agents support human handoff?</span>
<svg className="h-4 w-4 text-slate-700 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-4 text-sm text-slate-600">Yes. Configure queues, assignment rules, and escalation policies for seamless transitions.</div>
</details>
</div>
</div>
</section>

<section className="bg-transparent snap-start">
<div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
<div className="rounded-2xl ring-1 ring-white/30 p-8 md:p-10 bg-white/60 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to launch your first agent?</h3>
<p className="mt-2 text-slate-600">Start free or book a 20‑minute walkthrough with our team.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-slate-900/90 text-white text-sm px-5 py-3 ring-1 ring-black/10 hover:bg-slate-900 hover:ring-black/20 transition will-change-transform hover:-translate-y-0.5" href="#signup">
              Get started
              <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/60 backdrop-blur-xl text-slate-900 text-sm px-5 py-3 ring-1 ring-white/30 hover:bg-white/70 hover:ring-white/40 transition will-change-transform hover:-translate-y-0.5" href="#contact">
              Request demo
              <svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h4l4 4"></path><path d="M12 8v8"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/20 bg-white/40 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center ring-1 ring-white/20 tracking-tight" style={{letterSpacing: '-0.02em'}}>AE</div>
<span className="text-sm font-semibold tracking-tight">Agent Engine</span>
</div>
<p className="mt-3 text-sm text-slate-600">Autonomous agents for customer support, sales, and operations.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="h-9 w-9 rounded-md ring-1 ring-white/30 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 flex items-center justify-center transition" href="#">
<svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.3c1 10-9 17-17 9 2.2.1 4.3-.6 6-2C5 13 3.5 9.5 4.5 6.5c2.2 2.7 5.6 4.4 9.2 4-.8-3.6 3.7-5.4 6-3.1.9 0 2-1.4 2-1.4z"></path></svg>
</a>
<a aria-label="GitHub" className="h-9 w-9 rounded-md ring-1 ring-white/30 bg-white/60 backdrop-blur-xl hover:ring-white/40 hover:bg-white/70 flex items-center justify-center transition" href="#">
<svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.4-2.6-1.3-3.5.3-1.1.3-2.3 0-3.4 0 0-1 .3-3.3 1.5-2-.6-4.1-.6-6.1 0C6 2.4 5 2.1 5 2.1c-.3 1.1-.3 2.3 0 3.4C4.1 6.4 3.6 7.8 3.7 9.1c0 3.5 3 5.5 6 5.5-.5.6-.8 1.4-.9 2.2-.1.8 0 1.7 0 2.2"></path></svg>
</a>
</div>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Product</p>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition" href="#product">Overview</a></li>
<li><a className="hover:text-slate-900 transition" href="#solutions">Use cases</a></li>
<li><a className="hover:text-slate-900 transition" href="#pricing">Pricing</a></li>
<li><a className="hover:text-slate-900 transition" href="#docs">Docs</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Company</p>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition" href="#">Security</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Updates</p>
<form className="mt-3">
<div className="flex gap-2">
<input className="w-full rounded-lg ring-1 ring-white/30 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-white/40 hover:ring-white/40 transition bg-white/60 backdrop-blur-xl" placeholder="Work email" type="email"/>
<button className="rounded-lg bg-slate-900/90 text-white text-sm px-3 py-2 ring-1 ring-black/10 hover:bg-slate-900 hover:ring-black/20 transition" type="submit">Subscribe</button>
</div>
<p className="mt-2 text-xs text-slate-500">By subscribing, you agree to our privacy policy.</p>
</form>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t border-white/20 pt-6">
<p className="text-xs text-slate-500">© <span id="y">2025</span> Agent Engine, Inc.</p>
<div className="flex items-center gap-4 text-xs text-slate-600">
<a className="hover:text-slate-900 transition" href="#">Terms</a>
<a className="hover:text-slate-900 transition" href="#">Privacy</a>
<a className="hover:text-slate-900 transition" href="#">Status</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
