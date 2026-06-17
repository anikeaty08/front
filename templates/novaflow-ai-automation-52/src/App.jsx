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



    document.getElementById("year").textContent = new Date().getFullYear();
  
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
      
<div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">

<header className="border-b border-slate-800/60 sticky top-0 z-40 backdrop-blur-xl bg-slate-950/70">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 px-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-violet-500 via-sky-500 to-teal-400 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">NF</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
            NovaFlow<span className="text-slate-400"> AI</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm">
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#solutions">Solutions</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#how-it-works">How it works</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#use-cases">Use cases</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#pricing">Pricing</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800/80 hover:border-slate-600/80 transition-colors px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-slate-200">
            Book a demo
          </button>
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 text-slate-50 hover:from-violet-400 hover:via-indigo-400 hover:to-sky-400 shadow-lg shadow-violet-500/30 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-tight">
            Get started
            <span className="iconify-inline" data-icon="lucide:arrow-right" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</header>

<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs text-slate-200">AI-first automation studio for modern teams</span>
</div>
<div className="space-y-3 sm:space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              Automate the busywork.  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-sky-400 to-teal-300">
                Scale what matters.
              </span>
</h1>
<p className="text-base sm:text-lg text-slate-300/90 max-w-xl">
              NovaFlow AI designs, builds, and maintains end‑to‑end automations powered by large language models, APIs, and your internal tools—so your team can focus on high‑value work, not manual tasks.
            </p>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
<button className="inline-flex justify-center items-center gap-2 rounded-full bg-slate-50 text-slate-950 hover:bg-slate-200/90 transition-colors px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-semibold tracking-tight">
              Design my automation
              <span className="iconify-inline" data-icon="lucide:sparkles" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex justify-center items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 hover:bg-slate-900/80 transition-colors px-5 sm:px-6 py-2 sm:py-2.5 text-sm text-slate-100">
              Talk to a solutions architect
              <span className="iconify-inline" data-icon="lucide:calendar" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="space-y-3">
<p className="text-xs sm:text-sm text-slate-400">
              Trusted by lean teams shipping more with less:
            </p>
<div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-400">
<span className="tracking-tight font-semibold text-slate-200/80">OrionLabs</span>
<span className="tracking-tight font-semibold text-slate-200/80">Shiftly</span>
<span className="tracking-tight font-semibold text-slate-200/80">LayerOne</span>
<span className="tracking-tight font-semibold text-slate-200/80">Northwind</span>
</div>
<div className="flex flex-wrap items-center gap-4 pt-1">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-slate-700 border border-slate-900"></div>
<div className="h-6 w-6 rounded-full bg-slate-600 border border-slate-900"></div>
<div className="h-6 w-6 rounded-full bg-slate-500 border border-slate-900 flex items-center justify-center">
<span className="text-[0.6rem] text-slate-50 font-medium">+9</span>
</div>
</div>
<p className="text-xs sm:text-sm text-slate-400">
                On average, clients reclaim <span className="text-emerald-400 font-semibold">18+ hours</span> per teammate, per week.
              </p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_50%)]"></div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_24px_80px_rgba(15,23,42,0.9)] p-4 sm:p-5 space-y-4">

<div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs text-slate-200 font-medium">Live automations</span>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<span>Last 24h</span>
<button className="rounded-full border border-slate-700/80 px-2 py-0.5 hover:bg-slate-800/80">
<span className="iconify-inline" data-icon="lucide:more-horizontal" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 space-y-1.5">
<p className="text-[0.7rem] text-slate-400">Tasks automated</p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">128,940</p>
<p className="text-[0.7rem] text-emerald-400 flex items-center gap-1">
<span className="iconify-inline" data-icon="lucide:trending-up" style={{fontSize: '0.8rem', strokeWidth: '1.5'}}></span>
                  +42% vs last week
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 space-y-1.5">
<p className="text-[0.7rem] text-slate-400">Time saved</p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">3,270 h</p>
<p className="text-[0.7rem] text-sky-400 flex items-center gap-1">
<span className="iconify-inline" data-icon="lucide:sparkles" style={{fontSize: '0.8rem', strokeWidth: '1.5'}}></span>
                  Across 11 teams
                </p>
</div>
</div>

<div className="mt-2 rounded-xl border border-slate-800 bg-slate-900/70 p-3 space-y-3">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<div className="flex items-center gap-1.5">
<span className="iconify-inline" data-icon="lucide:workflow" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></span>
<span>Lead qualification flow</span>
</div>
<span className="rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-[2px]">
                  Active
                </span>
</div>
<div className="flex flex-col gap-2">

<div className="flex items-center gap-2">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
<span className="iconify-inline text-violet-200" data-icon="lucide:inbox" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
</div>
<div className="h-4 w-px bg-slate-700/80"></div>
</div>
<div className="flex-1 rounded-lg border border-slate-800 bg-slate-900/80 p-2.5">
<p className="text-xs text-slate-200 font-medium">Capture inbound request</p>
<p className="text-[0.7rem] text-slate-400">Form, email, or chat</p>
</div>
</div>

<div className="flex items-center gap-2">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
<span className="iconify-inline text-sky-200" data-icon="lucide:brain" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
</div>
<div className="h-4 w-px bg-slate-700/80"></div>
</div>
<div className="flex-1 rounded-lg border border-slate-800 bg-slate-900/80 p-2.5">
<p className="text-xs text-slate-200 font-medium">AI qualification &amp; routing</p>
<p className="text-[0.7rem] text-slate-400">Score, enrich, and segment in seconds</p>
</div>
</div>

<div className="flex items-center gap-2">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
<span className="iconify-inline text-emerald-200" data-icon="lucide:send" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="flex-1 rounded-lg border border-slate-800 bg-slate-900/80 p-2.5">
<p className="text-xs text-slate-200 font-medium">Personalized follow‑up</p>
<p className="text-[0.7rem] text-slate-400">On-brand outreach via email or CRM task</p>
</div>
</div>
</div>

<div className="mt-1 rounded-lg bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-violet-500/10 border border-slate-800 px-3 py-2 flex items-center justify-between gap-2">
<p className="text-[0.7rem] text-slate-200">
                  Avg. response time dropped from <span className="font-medium">18h</span> to <span className="font-medium text-emerald-300">4m</span>.
                </p>
<button className="text-[0.65rem] rounded-full border border-slate-600/80 px-2 py-0.5 text-slate-100 hover:bg-slate-800/80">
                  View playbook
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-slate-800/80" id="solutions">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              Automation that speaks your business language
            </h2>
<p className="mt-2 text-base text-slate-300 max-w-xl">
              We connect AI models, APIs, and your existing tools into resilient workflows that quietly run in the background—and notify humans only when it matters.
            </p>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify-inline" data-icon="lucide:lock" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></span>
<span>Security‑first implementation with SOC2‑ready patterns.</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-slate-600/70 transition-colors p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="h-8 w-8 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
<span className="iconify-inline text-violet-300" data-icon="lucide:bot" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-200 px-2 py-0.5">
                Customer Ops
              </span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">AI agents for support &amp; success</h3>
<p className="text-sm text-slate-300">
              Deflect repetitive tickets, auto‑draft responses, and surface the right context from docs, CRM, and product logs in one place.
            </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-1.5">
<span className="iconify-inline text-emerald-400" data-icon="lucide:check" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                Zendesk, Intercom, HubSpot, custom.
              </li>
<li className="flex items-center gap-1.5">
<span className="iconify-inline text-emerald-400" data-icon="lucide:check" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                On-brand replies trained on your tone.
              </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-slate-600/70 transition-colors p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="h-8 w-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
<span className="iconify-inline text-sky-300" data-icon="lucide:workflow" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] rounded-full border border-sky-500/40 bg-sky-500/10 text-sky-200 px-2 py-0.5">
                Revenue Ops
              </span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Lead, deal &amp; pipeline automation</h3>
<p className="text-sm text-slate-300">
              Let AI qualify, enrich, and route leads; update CRM fields; and trigger timely, personalized follow‑ups across the funnel.
            </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-1.5">
<span className="iconify-inline text-emerald-400" data-icon="lucide:check" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                CRM hygiene that maintains itself.
              </li>
<li className="flex items-center gap-1.5">
<span className="iconify-inline text-emerald-400" data-icon="lucide:check" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                Multi‑touch outreach workflows.
              </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-slate-600/70 transition-colors p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
<span className="iconify-inline text-emerald-200" data-icon="lucide:code-2" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-200 px-2 py-0.5">
                Internal Ops
              </span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Back‑office &amp; data workflows</h3>
<p className="text-sm text-slate-300">
              Automate reporting, reconciliations, approvals, and data clean‑up. Connect spreadsheets, data warehouses, and chat.
            </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-1.5">
<span className="iconify-inline text-emerald-400" data-icon="lucide:check" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                Human‑in‑the‑loop review steps.
              </li>
<li className="flex items-center gap-1.5">
<span className="iconify-inline text-emerald-400" data-icon="lucide:check" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                Secure access controls &amp; logging.
              </li>
</ul>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-slate-800/80" id="how-it-works">
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
<div className="lg:w-2/5 space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              From idea to live automation in weeks—not quarters
            </h2>
<p className="text-base text-slate-300">
              We combine a product mindset with deep technical expertise. Every engagement includes discovery, design, build, and ongoing optimization.
            </p>
<div className="space-y-2 text-sm text-slate-300">
<p className="flex items-center gap-2">
<span className="iconify-inline text-emerald-400" data-icon="lucide:shield-check" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
                Clear guardrails: we never ship “black box” automations.
              </p>
<p className="flex items-center gap-2">
<span className="iconify-inline text-sky-400" data-icon="lucide:activity" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
                Observability built‑in: logs, alerts, and fallbacks by design.
              </p>
</div>
</div>
<div className="lg:w-3/5 grid sm:grid-cols-3 gap-4">

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 px-2 py-0.5">
                  Step 1
                </span>
<span className="text-[0.7rem] text-slate-400">1–2 days</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Discovery &amp; opportunity mapping</h3>
<p className="text-xs text-slate-300">
                We review your processes, tools, and data to identify high‑leverage automation candidates with clear ROI.
              </p>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 px-2 py-0.5">
                  Step 2
                </span>
<span className="text-[0.7rem] text-slate-400">1–2 weeks</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Design &amp; prototyping</h3>
<p className="text-xs text-slate-300">
                We create diagrams, prompts, and integration plans, then ship a working prototype you can test with real data.
              </p>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 px-2 py-0.5">
                  Step 3
                </span>
<span className="text-[0.7rem] text-slate-400">2–4 weeks</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Build, launch &amp; optimize</h3>
<p className="text-xs text-slate-300">
                We productionize, set up monitoring, and run A/B tests—then keep tuning as your processes and data evolve.
              </p>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-slate-800/80" id="use-cases">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Proven automations you can launch quickly
          </h2>
<p className="text-sm text-slate-300 max-w-sm">
            Mix and match these blueprints or use them as inspiration for something fully custom.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-5">

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
<span className="iconify-inline text-sky-200" data-icon="lucide:messages-square" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
</span>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Multi‑channel support triage</h3>
</div>
<span className="text-[0.65rem] text-emerald-300">Live with 3 clients</span>
</div>
<p className="text-sm text-slate-300">
              Classify, route, and respond to support tickets across email, chat, and in‑app messaging using AI that understands your product.
            </p>
<div className="flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Ticket deflection</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Knowledge base</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">CSAT uplift</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
<span className="iconify-inline text-violet-200" data-icon="lucide:badge-dollar-sign" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
</span>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">AI‑driven outbound engine</h3>
</div>
<span className="text-[0.65rem] text-emerald-300">3–5x reply rates</span>
</div>
<p className="text-sm text-slate-300">
              Enrich accounts, craft tailored messaging, and coordinate multi‑step outreach sequences that feel handcrafted—not automated.
            </p>
<div className="flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">ICP scoring</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Personalized emails</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">CRM sync</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
<span className="iconify-inline text-emerald-200" data-icon="lucide:table-2" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
</span>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Reporting &amp; insights autopilot</h3>
</div>
<span className="text-[0.65rem] text-emerald-300">Hours → minutes</span>
</div>
<p className="text-sm text-slate-300">
              Pull data from your tools, clean and aggregate it, then generate reports and narratives that update on a schedule or via chat.
            </p>
<div className="flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">BI sync</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Narrative insights</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Slack digests</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-lg bg-slate-600/30 border border-slate-500/40 flex items-center justify-center">
<span className="iconify-inline text-slate-100" data-icon="lucide:folder-cog" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></span>
</span>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Document &amp; workflow automation</h3>
</div>
<span className="text-[0.65rem] text-emerald-300">Compliance‑ready</span>
</div>
<p className="text-sm text-slate-300">
              Auto‑generate contracts, summaries, and approvals with built‑in review steps and audit trails tailored to your governance.
            </p>
<div className="flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Contract drafts</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Policy checks</span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">Approvals</span>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-slate-800/80" id="pricing">
<div className="flex flex-col items-center text-center mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Pricing designed to pay for itself quickly
          </h2>
<p className="mt-2 text-base text-slate-300 max-w-2xl">
            Start with a scoped pilot, then expand to additional teams once you’ve seen real impact. No surprise costs, no long‑term lock‑in.
          </p>
</div>
<div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6 items-stretch">

<div className="relative rounded-2xl border border-violet-500/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-5 sm:p-6 shadow-[0_24px_80px_rgba(79,70,229,0.25)] flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="space-y-1">
<h3 className="text-base font-semibold tracking-tight text-slate-50">Automation Pilot</h3>
<p className="text-xs text-slate-300">Perfect for validating ROI on 1–2 core workflows.</p>
</div>
<span className="text-[0.65rem] rounded-full bg-violet-500/10 border border-violet-400/60 text-violet-100 px-2.5 py-0.5">
                Most popular
              </span>
</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">$5k</span>
<span className="text-xs text-slate-400">for a 4‑week engagement</span>
</div>
<ul className="space-y-2 text-sm text-slate-100 mb-5">
<li className="flex items-start gap-2">
<span className="iconify-inline text-emerald-400 mt-0.5" data-icon="lucide:check" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
<span>Discovery workshop and automation roadmap.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify-inline text-emerald-400 mt-0.5" data-icon="lucide:check" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
<span>Design and implementation of up to 2 production‑ready workflows.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify-inline text-emerald-400 mt-0.5" data-icon="lucide:check" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
<span>Integration with your core tools and LLM provider of choice.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify-inline text-emerald-400 mt-0.5" data-icon="lucide:check" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
<span>Monitoring, logs, and basic dashboards.</span>
</li>
</ul>
<div className="mt-auto flex flex-col sm:flex-row gap-2">
<button className="inline-flex justify-center items-center gap-2 rounded-full bg-slate-50 text-slate-950 hover:bg-slate-200/90 transition-colors px-5 py-2 text-sm font-semibold tracking-tight w-full sm:w-auto">
                Schedule pilot call
                <span className="iconify-inline" data-icon="lucide:arrow-right" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex justify-center items-center gap-2 rounded-full border border-slate-600/80 bg-slate-950/60 hover:bg-slate-900/80 transition-colors px-5 py-2 text-sm text-slate-100 w-full sm:w-auto">
                Download sample SOW
              </button>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6 flex flex-col">
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-1">Automation Partner</h3>
<p className="text-xs text-slate-300 mb-4">
              Ongoing partnership with a dedicated team that continuously designs, builds, and optimizes automations across your org.
            </p>
<div className="mb-4">
<p className="text-lg font-semibold tracking-tight text-slate-50">Custom retainers from $6k / month</p>
<p className="text-xs text-slate-400">
                Includes priority support, roadmap planning, and on‑call incident response.
              </p>
</div>
<ul className="space-y-2 text-sm text-slate-100 mb-5">
<li className="flex items-start gap-2">
<span className="iconify-inline text-emerald-400 mt-0.5" data-icon="lucide:check" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
<span>Dedicated solutions architect and engineer.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify-inline text-emerald-400 mt-0.5" data-icon="lucide:check" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
<span>Unlimited automation ideas; scoped implementation each month.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify-inline text-emerald-400 mt-0.5" data-icon="lucide:check" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></span>
<span>Advanced analytics, continuous tuning, and regression protection.</span>
</li>
</ul>
<button className="inline-flex justify-center items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 hover:bg-slate-900/80 transition-colors px-5 py-2 text-sm text-slate-100 w-full sm:w-auto">
              Talk about long‑term partnership
            </button>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-slate-800/80" id="contact">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              Tell us where you’re losing time. We’ll show you what to automate first.
            </h2>
<p className="text-base text-slate-300">
              Share a bit about your team and tools. We’ll respond within one business day with concrete automation ideas and timelines.
            </p>
<div className="space-y-2 text-sm text-slate-300">
<p className="flex items-center gap-2">
<span className="iconify-inline text-emerald-400" data-icon="lucide:shield" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
                We can sign your NDA before diving into details.
              </p>
<p className="flex items-center gap-2">
<span className="iconify-inline text-sky-400" data-icon="lucide:clock-3" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
                Typical response time: under 6 hours.
              </p>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-300 mb-1.5" htmlFor="name">Name</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/80 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/70 px-3 py-2" id="name" name="name" placeholder="Alex Rivera" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1.5" htmlFor="company">Company</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/80 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/70 px-3 py-2" id="company" name="company" placeholder="Acme Inc." type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-300 mb-1.5" htmlFor="email">Work email</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/80 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/70 px-3 py-2" id="email" name="email" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1.5" htmlFor="team-size">Team size</label>
<select className="w-full rounded-lg border border-slate-700/80 bg-slate-950/80 text-sm text-slate-50 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/70 px-3 py-2" id="team-size" name="team-size">
<option className="bg-slate-950">1–10</option>
<option className="bg-slate-950">11–50</option>
<option className="bg-slate-950">51–200</option>
<option className="bg-slate-950">200+</option>
</select>
</div>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1.5" htmlFor="tools">What tools do you use most today?</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/80 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/70 px-3 py-2" id="tools" name="tools" placeholder="CRM, support, data warehouse, internal tools..." type="text"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1.5" htmlFor="message">Where are you losing the most time today?</label>
<textarea className="w-full rounded-lg border border-slate-700/80 bg-slate-950/80 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/70 px-3 py-2" id="message" name="message" placeholder="Share a few workflows or processes you’d love to automate..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<input className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-950 checked:bg-violet-500 checked:border-violet-500 focus:ring-violet-500" id="nda" type="checkbox"/>
<label className="text-xs text-slate-300" htmlFor="nda">We’d like to sign an NDA first</label>
</div>
<button className="inline-flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 text-slate-50 hover:from-violet-400 hover:via-indigo-400 hover:to-sky-400 transition-colors px-5 py-2 text-sm font-semibold tracking-tight" type="submit">
                  Submit inquiry
                  <span className="iconify-inline" data-icon="lucide:send" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</button>
</div>
<p className="text-[0.65rem] text-slate-500">
                By submitting, you agree to be contacted about NovaFlow AI services. We’ll never share your information with third parties.
              </p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/80 mt-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="font-semibold tracking-tight text-slate-100">NovaFlow AI</span>
<span>•</span>
<span>AI Automation Studio</span>
</div>
<div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-slate-400">
<span>© <span id="year"></span> NovaFlow AI. All rights reserved.</span>
<a className="hover:text-slate-200" href="#">Privacy</a>
<a className="hover:text-slate-200" href="#">Security</a>
<a className="inline-flex items-center gap-1 hover:text-slate-200" href="mailto:hello@novaflow.ai">
<span className="iconify-inline" data-icon="lucide:mail" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></span>
            hello@novaflow.ai
          </a>
</div>
</div>
</footer>
</div>


    </>
  );
}
