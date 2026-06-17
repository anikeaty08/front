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
      

<div className="min-h-screen flex flex-col">

<div className="h-0.5 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"></div>

<header className="sticky top-0 z-50 border-b border-neutral-200/70 backdrop-blur bg-white/80">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="h-16 md:h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#home">
<img alt="ProPair Connect" className="h-6 md:h-8 w-auto object-contain select-none" height="32" onerror="this.style.display='none'; if(this.nextElementSibling){ this.nextElementSibling.style.display='inline-flex'; }" src="propair-connect-wordmark.png" width="160"/>

<span className="hidden items-center text-neutral-900" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', fontWeight: '600', letterSpacing: '-0.02em', fontSize: '16px', lineHeight: '1'}}>
              ProPair CONNECT
            </span>
</a>

<nav className="hidden lg:flex items-center gap-1 text-sm">
<a className="px-3 py-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition" href="#home">Home</a>
<a className="px-3 py-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition" href="#pillars">Why CONNECT</a>
<a className="px-3 py-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition" href="#workflow">Workflow</a>
<a className="px-3 py-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition" href="#performance">Performance</a>
<a className="px-3 py-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition" href="#demo">Demo</a>
<a className="ml-3 inline-flex items-center rounded-lg px-4 py-2.5 text-white shadow-sm ring-1 ring-orange-600/20 hover:shadow hover:translate-y-[-1px] transition" href="#demo" style={{backgroundColor: '#f97316'}}>
<span className="text-sm font-medium tracking-tight">Book a Demo</span>
<svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</nav>

<a className="lg:hidden inline-flex items-center rounded-md px-3 py-2 text-sm text-white shadow-sm ring-1 ring-orange-600/20" href="#demo" style={{backgroundColor: '#f97316'}}>Demo</a>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative" id="home">

<div className="absolute inset-0 -z-10 pointer-events-none">
<div className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-20" style={{background: '#f97316'}}></div>
<div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20" style={{background: '#34679a'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-28 pb-14 md:pb-24">

<div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/60 px-3.5 py-1.5 mb-7">
<span className="inline-block h-1.5 w-1.5 rounded-full" style={{background: '#f97316'}}></span>
<span className="text-xs md:text-sm font-medium tracking-tight" style={{color: '#f97316'}}>Orchestrate LO outreach with Predictive AI &amp; Agentic Voice AI</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold leading-[1.05] mb-6" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', color: '#34679a'}}>
            Stop cold calling. Start closing.
          </h1>

<p className="max-w-3xl text-base md:text-xl text-neutral-600 leading-relaxed mb-5">
<span className="font-semibold" style={{color: '#f97316'}}>CONNECT</span> brings voice to ProPair’s
            <span className="font-semibold" style={{color: '#34679a'}}>RANK</span> +
            <span className="font-semibold" style={{color: '#3297b6'}}>MATCH</span> engine—automating outreach with intelligence that speaks, learns, and converts faster.
          </p>
<p className="max-w-3xl text-sm md:text-base text-neutral-600 leading-relaxed mb-10">
            For a decade, lenders have trusted ProPair AI to predict the best lead and the best loan officer. Now, the same proven AI makes the first call—so your LOs can focus on what they do best: funding loans.
          </p>

<div className="flex flex-col sm:flex-row items-start gap-3">
<a className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white text-sm font-medium tracking-tight hover:shadow-md hover:-translate-y-0.5 transition" href="#demo" style={{background: '#f97316'}}>
              Book a Demo
              <svg className="ml-2 h-4 w-4 opacity-90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium tracking-tight ring-1 ring-inset hover:bg-neutral-50 transition" href="#demo" style={{color: '#34679a', borderColor: '#34679a'}}>
<svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 11V7a3 3 0 10-6 0v4M5 11h14l-1 9H6l-1-9z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              ROI Calculator
            </a>
</div>

<p className="mt-5 text-xs md:text-sm text-neutral-500">
            See how <span style={{color: '#f97316'}}>CONNECT</span> amplifies
            <span style={{color: '#34679a'}}>RANK</span> and <span style={{color: '#3297b6'}}>MATCH</span> in production.
          </p>
</div>
</section>

<section className="relative border-t border-neutral-200 bg-white" id="pillars">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
<div className="max-w-3xl mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', color: '#34679a'}}>
              Why <span style={{color: '#f97316'}}>CONNECT</span> changes everything
            </h2>
<p className="text-neutral-600 text-base md:text-lg">
              From prediction to action—CONNECT transforms intelligence into outcomes, instantly.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<article className="group rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-1 hover:shadow-md transition">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-5 ring-1 ring-neutral-200 bg-neutral-50 group-hover:ring-orange-200 group-hover:bg-orange-50 transition">
<svg className="h-5 w-5" fill="none" stroke="#f97316" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3" style={{color: '#34679a'}}>From prediction to action</h3>
<p className="text-neutral-600 leading-relaxed mb-6">
<span style={{color: '#34679a'}}>RANK</span> and <span style={{color: '#3297b6'}}>MATCH</span> revolutionized prioritization and routing.
                <span style={{color: '#f97316'}}> CONNECT</span> completes the loop—executing outreach instantly with a voice that mirrors your brand and compliance standards.
              </p>
<a className="inline-flex items-center text-sm font-medium tracking-tight" href="#" style={{color: '#34679a'}}>
                Learn more
                <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</article>
<article className="group rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-1 hover:shadow-md transition">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-5 ring-1 ring-neutral-200 bg-neutral-50 group-hover:ring-orange-200 group-hover:bg-orange-50 transition">
<svg className="h-5 w-5" fill="none" stroke="#f97316" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3l8 8h-7a4 4 0 00-4 4v6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3" style={{color: '#34679a'}}>Amplifies your entire stack</h3>
<p className="text-neutral-600 leading-relaxed mb-6">
<span style={{color: '#34679a'}}>RANK</span> finds who to call. <span style={{color: '#3297b6'}}>MATCH</span> assigns the best LO.
                <span style={{color: '#f97316'}}> CONNECT</span> does the calling—forming the first autonomous origination contact layer.
              </p>
<a className="inline-flex items-center text-sm font-medium tracking-tight" href="#" style={{color: '#34679a'}}>
                See integration
                <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</article>
<article className="group rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-1 hover:shadow-md transition">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-5 ring-1 ring-neutral-200 bg-neutral-50 group-hover:ring-orange-200 group-hover:bg-orange-50 transition">
<svg className="h-5 w-5" fill="none" stroke="#f97316" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 22a10 10 0 100-20 10 10 0 000 20z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3" style={{color: '#34679a'}}>Compliance you can trust</h3>
<p className="text-neutral-600 leading-relaxed mb-6">
                Every interaction recorded and transcribed. Built-in TCPA and enterprise-grade transparency for lenders who can’t afford risk.
              </p>
<a className="inline-flex items-center text-sm font-medium tracking-tight" href="#" style={{color: '#34679a'}}>
                View compliance
                <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</article>
<article className="group rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-1 hover:shadow-md transition">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-5 ring-1 ring-neutral-200 bg-neutral-50 group-hover:ring-orange-200 group-hover:bg-orange-50 transition">
<svg className="h-5 w-5" fill="none" stroke="#f97316" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3" style={{color: '#34679a'}}>Scale like software</h3>
<p className="text-neutral-600 leading-relaxed mb-6">
                24/7 outreach, zero downtime—handing off to LOs the moment interest peaks for human-to-human closing.
              </p>
<a className="inline-flex items-center text-sm font-medium tracking-tight" href="#" style={{color: '#34679a'}}>
                See results
                <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</article>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200 bg-neutral-50" id="workflow">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
<div className="max-w-3xl mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', color: '#34679a'}}>
              How it fits your workflow
            </h2>
<p className="text-neutral-600 text-base md:text-lg">
<span style={{color: '#f97316'}}>CONNECT</span> enhances LO performance—free time to guide borrowers to close.
            </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-[2.5rem] left-[7.5rem] right-8 h-px bg-neutral-200"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white border border-neutral-200 p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center ring-1 ring-neutral-200">

<svg className="h-6 w-6" fill="none" stroke="#34679a" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-1" style={{color: '#34679a'}}>Leads flow into RANK</h3>
<p className="text-neutral-600">Scored by conversion probability in milliseconds.</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-white border border-neutral-200 p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center ring-1 ring-neutral-200">

<svg className="h-6 w-6" fill="none" stroke="#3297b6" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="10" cy="8" r="4"></circle>
<path d="M16 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-1" style={{color: '#34679a'}}>MATCH pairs the optimal LO</h3>
<p className="text-neutral-600">Grounded in historical performance and fit.</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-white border border-neutral-200 p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center ring-1 ring-neutral-200">

<svg className="h-6 w-6" fill="none" stroke="#f97316" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.7 19.7 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3l2 5-2.5 2.5a16 16 0 0 0 6 6L16 14l5 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-1" style={{color: '#34679a'}}>CONNECT executes outreach</h3>
<p className="text-neutral-600">AI voice qualifies and transfers live to your LOs.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white" id="performance">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
<div className="max-w-3xl mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', color: '#34679a'}}>
              Proof in performance
            </h2>
<p className="text-neutral-600 text-base md:text-lg">
              Measurable lift across speed-to-contact, conversion, and cost.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">

<div className="rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<div className="text-5xl md:text-6xl font-semibold tracking-tight mb-2" style={{color: '#f97316', fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>70%</div>
<p className="text-neutral-800 font-medium">Reduction in cost to first contact</p>
<p className="text-neutral-500 text-sm mt-1">Up to 70% savings compared to traditional BPO</p>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<div className="text-5xl md:text-6xl font-semibold tracking-tight mb-2" style={{color: '#f97316', fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>25%+</div>
<p className="text-neutral-800 font-medium">Lift in conversion rates</p>
<p className="text-neutral-500 text-sm mt-1">Proven performance increase across the funnel</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-50 ring-1 ring-neutral-200 flex items-center justify-center">
<svg className="h-5 w-5" fill="none" stroke="#f97316" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 22a10 10 0 100-20 10 10 0 000 20z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-1" style={{color: '#34679a'}}>Proven at scale</h3>
<p className="text-neutral-600">Battle-tested across millions of leads with a decade of ProPair data.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-50 ring-1 ring-neutral-200 flex items-center justify-center">
<svg className="h-5 w-5" fill="none" stroke="#f97316" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-1" style={{color: '#34679a'}}>Universal integration</h3>
<p className="text-neutral-600">Works with every major CRM and LOS—drop-in and go.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', color: '#34679a'}}>
              Trusted by leading mortgage lenders
            </h2>
<p className="text-neutral-600 text-base md:text-lg">
              See how <span style={{color: '#f97316'}}>CONNECT</span> is transforming origination teams across the industry
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<figure className="rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<blockquote className="text-neutral-800 text-sm md:text-base leading-7">
                “CONNECT gave us speed-to-contact we couldn’t hit with headcount alone—and our LOs their time where it matters.”
              </blockquote>
<figcaption className="mt-6 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Alex Rivera</div>
<div className="text-xs text-neutral-500">VP Sales, National Lender</div>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<blockquote className="text-neutral-800 text-sm md:text-base leading-7">
                “The handoff timing to our LOs is uncanny—right at peak intent. It feels like magic, but it’s just great engineering.”
              </blockquote>
<figcaption className="mt-6 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Taylor Brooks</div>
<div className="text-xs text-neutral-500">Head of CX, Regional Bank</div>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl border border-neutral-200 bg-white p-8 hover:-translate-y-0.5 hover:shadow-md transition">
<blockquote className="text-neutral-800 text-sm md:text-base leading-7">
                “Compliance-first and transparent. Our legal team signed off faster than any AI tool we’ve evaluated.”
              </blockquote>
<figcaption className="mt-6 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Morgan Lee</div>
<div className="text-xs text-neutral-500">Compliance Director</div>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200 bg-white" id="demo">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
<div className="relative overflow-hidden rounded-3xl border border-neutral-200">

<div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(1000px 400px at 20% 0%, rgba(52,103,154,0.15), transparent), radial-gradient(1000px 400px at 80% 100%, rgba(50,151,182,0.15), transparent)'}}></div>
<div className="p-8 md:p-12 lg:p-16">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', color: '#34679a'}}>
                  Ready to turn prediction into performance?
                </h2>
<p className="text-neutral-700 text-base md:text-lg mb-8">
                  Book a demo and see how <span style={{color: '#f97316'}}>CONNECT</span> amplifies the entire ProPair ecosystem.
                </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium tracking-tight text-white hover:shadow-md hover:-translate-y-0.5 transition" href="tel:+10000000000" style={{background: '#34679a'}}>
<svg className="mr-2 h-4 w-4 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72 12.9 12.9 0 00.7 2.81 2 2 0 01-.45 2.11L9 10a16 16 0 006 6l.36-.26a2 2 0 012.11-.45 12.9 12.9 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                    Talk to sales
                  </a>
<a className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium tracking-tight ring-1 ring-inset hover:bg-neutral-50 transition" href="#" style={{color: '#f97316', borderColor: '#f97316'}}>
<svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                    ROI Calculator
                  </a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
<div>
<div className="flex items-center gap-3 mb-4">

<img alt="ProPair Connect" className="h-6 md:h-7 w-auto object-contain select-none" onerror="this.style.display='none';" src="propair-connect-wordmark.png" />
</img></div>
<p className="text-sm text-neutral-600">
              Predictive lead orchestration for mortgage and home equity lenders.
            </p>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-neutral-900 mb-3" style={{color: '#34679a'}}>Product</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#pillars">Features</a></li>
<li><a className="hover:text-neutral-900 transition" href="#workflow">Workflow</a></li>
<li><a className="hover:text-neutral-900 transition" href="#demo">ROI Calculator</a></li>
<li><a className="hover:text-neutral-900 transition" href="#performance">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-neutral-900 mb-3" style={{color: '#34679a'}}>Company</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#">About</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900 transition" href="#demo">Contact</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-neutral-900 mb-3" style={{color: '#34679a'}}>Legal</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Terms of Service</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Compliance</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-6 border-top border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4" style={{borderTop: '1px solid rgba(23,23,23,0.1)'}}>
<p className="text-sm text-neutral-500">© 2024 ProPair CONNECT. All rights reserved.</p>
<div className="flex items-center gap-4">
<a aria-label="LinkedIn" className="text-neutral-400 hover:text-neutral-700 transition" href="#">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="Twitter" className="text-neutral-400 hover:text-neutral-700 transition" href="#">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 5.8a8.3 8.3 0 01-2.4.7 4.1 4.1 0 001.8-2.3 8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.8A11.6 11.6 0 013 4.8a4.1 4.1 0 001.3 5.5 4 4 0 01-1.8-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.8.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 19.6a11.6 11.6 0 006.3 1.8c7.6 0 11.8-6.3 11.8-11.8v-.5A8.4 8.4 0 0022 5.8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
