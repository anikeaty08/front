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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 font-sans" href="#">
<svg aria-hidden="true" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
                NEXUS
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors font-sans" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors font-sans" href="#process">Methodology</a>
<a className="hover:text-white transition-colors font-sans" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block font-sans" href="#">Log in</a>
<a className="bg-white text-neutral-950 px-3 py-1.5 rounded text-xs font-medium hover:bg-neutral-200 transition-colors border border-transparent hover:border-neutral-300 font-sans" href="#">
                    Book Audit
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full glow-effect pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider font-medium text-neutral-300 mb-8 backdrop-blur-sm font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Accepting New Clients
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-normal text-white tracking-tight font-google-sans-flex mb-6">
                Scale faster with <br/>
<span className="text-gradient font-google-sans-flex font-normal">intelligent automation.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto mb-10 font-light leading-relaxed font-sans">
                We replace repetitive manual workflows with autonomous AI agents, saving your team 20+ hours per week.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-md bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 font-sans">
                    Start Automating
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-10 px-6 rounded-md border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm font-medium hover:bg-neutral-800 hover:text-white transition-all font-sans">
                    View Case Studies
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6">
<div className="relative rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1] group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/80 pointer-events-none z-10"></div>

<div className="p-6 h-full flex flex-col">
<div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="h-1.5 w-32 bg-neutral-800 rounded-full"></div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="border border-white/5 bg-white/[0.02] rounded-lg p-4 flex flex-col gap-3">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-neutral-500 font-medium font-sans">Inbound Leads</span>
<svg aria-hidden="true" data-icon="lucide:users" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="h-2 w-3/4 bg-neutral-800 rounded-full"></div>
<div className="h-2 w-1/2 bg-neutral-800 rounded-full"></div>
<div className="mt-auto flex items-center gap-2 text-[10px] text-emerald-500 font-sans">
<svg aria-hidden="true" data-icon="lucide:trending-up" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
                                +24% vs last week
                            </div>
</div>

<div className="border border-indigo-500/20 bg-indigo-500/[0.03] rounded-lg p-4 flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-indigo-300 font-medium font-sans">AI Processing</span>
<svg aria-hidden="true" data-icon="lucide:loader-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-600 w-2/3"></div>
</div>
</div>
<div className="text-[10px] text-neutral-500 font-mono font-sans">analyzing_sentiment...</div>
</div>
</div>

<div className="border border-white/5 bg-white/[0.02] rounded-lg p-4 flex flex-col gap-3">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-neutral-500 font-medium font-sans">CRM Updates</span>
<svg aria-hidden="true" data-icon="lucide:database" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<div className="space-y-2 mt-1">
<div className="h-8 w-full border border-dashed border-neutral-800 rounded flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-8 w-full border border-dashed border-neutral-800 rounded flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-white/5 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs text-neutral-500 mb-8 font-medium font-sans">TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-lg font-bold tracking-tight text-white flex items-center gap-1 font-sans"><span className="w-4 h-4 bg-white rounded-sm"></span> ACME</div>
<div className="text-lg font-bold tracking-tight text-white flex items-center gap-1 font-sans"><span className="w-4 h-4 bg-white rounded-full"></span> SPHERE</div>
<div className="text-lg font-bold tracking-tight text-white flex items-center gap-1 font-sans"><span className="w-4 h-4 border-2 border-white rotate-45"></span> KINETIC</div>
<div className="text-lg font-bold tracking-tight text-white flex items-center gap-1 font-sans"><span className="w-4 h-4 bg-white" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></span> VOLT</div>
</div>
</div>
</section>

<section className="md:py-32 bg-neutral-950 pt-24 pb-24 relative" id="solutions">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight font-google-sans-flex font-normal">Capabilities designed for speed</h2>
<p className="text-neutral-400 text-sm md:text-base font-light font-sans">
                    We build custom neural networks that connect your existing stack. No new software to learn, just smarter workflows.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">

<div className="md:col-span-2 row-span-1 md:row-span-2 rounded-xl border border-white/10 bg-neutral-900/20 p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 border border-white/5">
<svg aria-hidden="true" data-icon="lucide:bot" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-sans">Autonomous Agents</h3>
<p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-sans">
                                Deploy 24/7 intelligent agents that handle customer support, lead qualification, and appointment setting without human intervention.
                            </p>
</div>

<div className="space-y-3 mt-8">
<div className="flex gap-3 items-end">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex-shrink-0"></div>
<div className="bg-neutral-800/50 rounded-2xl rounded-bl-none px-4 py-2 text-xs text-neutral-300 border border-white/5 max-w-[80%] font-sans">
                                    Can you check the inventory for the Q3 batch?
                                </div>
</div>
<div className="flex gap-3 items-end flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="bg-indigo-900/20 rounded-2xl rounded-br-none px-4 py-2 text-xs text-indigo-200 border border-indigo-500/20 max-w-[80%] font-sans">
                                    Checked. 4,500 units available. I've drafted a re-order PO for your approval.
                                </div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-900/20 p-6 flex flex-col relative group overflow-hidden hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 border border-white/5">
<svg aria-hidden="true" data-icon="lucide:workflow" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Zapier on Steroids</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        Complex multi-step logic flows that adapt to data variability using LLMs.
                    </p>

<div className="absolute bottom-6 right-6 flex gap-1">
<div className="w-1 h-8 bg-neutral-800 rounded-full group-hover:bg-emerald-500/50 transition-colors duration-300"></div>
<div className="w-1 h-12 bg-neutral-800 rounded-full group-hover:bg-emerald-500/70 transition-colors duration-500"></div>
<div className="w-1 h-6 bg-neutral-800 rounded-full group-hover:bg-emerald-500/40 transition-colors duration-700"></div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-900/20 p-6 flex flex-col relative group overflow-hidden hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 border border-white/5">
<svg aria-hidden="true" data-icon="lucide:database-zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"></path><path d="M3 12a9 3 0 0 0 11.59 2.87"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Unstructured Data</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        Extract structured data from PDFs, emails, and voice notes instantly.
                    </p>
<div className="mt-auto pt-4 flex gap-2">
<span className="px-2 py-1 rounded bg-neutral-800 border border-white/5 text-[10px] text-neutral-400 font-sans">PDF</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="px-2 py-1 rounded bg-indigo-900/30 border border-indigo-500/30 text-[10px] text-indigo-300 font-sans">JSON</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-950 border-white/5 pt-24 pb-24">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl text-white mb-6 tracking-tight font-google-sans-flex font-normal">The cost of doing nothing.</h2>
<p className="text-neutral-400 mb-8 font-light text-sm leading-relaxed font-sans">
                        Manual data entry and repetitive tasks bleed efficiency. Our systems typically pay for themselves within 45 days.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1">
<svg aria-hidden="true" data-icon="lucide:x-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium font-sans">Manual: 20hrs/week</h4>
<p className="text-neutral-500 text-xs mt-1 font-sans">Sales team copying data from LinkedIn to CRM.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium font-sans">Automated: 0hrs/week</h4>
<p className="text-neutral-500 text-xs mt-1 font-sans">Leads enriched and synced automatically.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-neutral-900/30 border border-white/5 rounded-xl p-8">
<div className="flex justify-between items-end h-64 gap-4 px-4 pb-4 border-b border-neutral-800">
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[30%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">Before</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[45%] relative group"></div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[50%] relative group"></div>
<div className="w-full bg-gradient-to-t from-indigo-900/50 to-indigo-500/50 rounded-t-sm h-[85%] relative group shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-indigo-300 font-medium font-sans">Now</div>
</div>
</div>
<div className="mt-4 flex justify-between text-[10px] text-neutral-500 font-mono uppercase">
<span className="font-sans">Q1</span>
<span className="font-sans">Q2</span>
<span className="font-sans">Q3</span>
<span className="font-sans">Q4 (AI)</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl text-white mb-4 tracking-tight font-google-sans-flex font-normal">Simple, transparent pricing</h2>

<div className="flex items-center justify-center gap-3 mt-6">
<span className="text-sm text-neutral-400 font-sans">Monthly</span>
<label className="relative inline-block w-10 h-6 cursor-pointer" htmlFor="billing-toggle">
<input className="toggle-checkbox absolute opacity-0 w-0 h-0" id="billing-toggle" type="checkbox"/>
<span className="toggle-label absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-neutral-800 rounded-full transition-colors duration-300 before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-neutral-400 before:rounded-full before:transition-transform before:duration-300"></span>
</label>
<span className="text-sm text-white font-medium font-sans">Yearly <span className="text-emerald-500 text-xs ml-1 font-sans">-20%</span></span>
</div>
<style>
                    #billing-toggle:checked + .toggle-label { background-color: #404040; }
                    #billing-toggle:checked + .toggle-label:before { transform: translateX(16px); background-color: #fff; }
                </style>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-xl border border-white/5 bg-neutral-900/20 hover:border-neutral-700 transition-colors">
<h3 className="text-lg font-medium text-white font-sans">Starter</h3>
<div className="my-4"><span className="text-3xl text-white font-google-sans-flex font-normal">$2,500</span><span className="text-neutral-500 text-sm font-sans">/mo</span></div>
<p className="text-sm text-neutral-400 mb-6 min-h-[40px] font-sans">Perfect for validating automation workflows.</p>
<button className="w-full py-2 rounded-md border border-neutral-700 text-white text-sm font-medium hover:bg-neutral-800 transition-colors mb-8 font-sans">Get Started</button>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 2 Custom Workflows</li>
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Weekly Maintenance</li>
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Email Support</li>
</ul>
</div>

<div className="p-8 rounded-xl border border-indigo-500/30 bg-neutral-900/40 relative shadow-2xl shadow-indigo-500/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wide font-sans">Popular</div>
<h3 className="text-lg font-medium text-white font-sans">Growth</h3>
<div className="my-4"><span className="text-3xl text-white font-google-sans-flex font-normal">$5,000</span><span className="text-neutral-500 text-sm font-sans">/mo</span></div>
<p className="text-sm text-neutral-400 mb-6 min-h-[40px] font-sans">Scale your operations with autonomous agents.</p>
<button className="w-full py-2 rounded-md bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors mb-8 font-sans">Get Started</button>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 5 Custom Workflows</li>
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1 Autonomous Agent</li>
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 24/7 Monitoring</li>
</ul>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-neutral-900/20 hover:border-neutral-700 transition-colors">
<h3 className="text-lg font-medium text-white font-sans">Enterprise</h3>
<div className="my-4"><span className="text-3xl text-white font-google-sans-flex font-normal">Custom</span></div>
<p className="text-sm text-neutral-400 mb-6 min-h-[40px] font-sans">Full digital transformation for large orgs.</p>
<button className="w-full py-2 rounded-md border border-neutral-700 text-white text-sm font-medium hover:bg-neutral-800 transition-colors mb-8 font-sans">Contact Sales</button>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited Workflows</li>
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Custom LLM Fine-tuning</li>
<li className="flex gap-2 font-sans"><svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated Engineer</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 mb-4 font-sans" href="#">
<svg aria-hidden="true" data-icon="lucide:bot" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
                        NEXUS
                    </a>
<p className="text-xs text-neutral-500 font-sans">
                        Building the future of work through intelligent automation.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 font-sans">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors font-sans" href="#">About</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 font-sans">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors font-sans" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Terms</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 font-sans">Connect</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-white/5 text-[10px] text-neutral-600">
<p className="font-sans">© 2024 Nexus Automation Inc.</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="font-sans">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
