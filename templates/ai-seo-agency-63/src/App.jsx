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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(40%_30%_at_15%_35%,rgba(139,92,246,0.16),transparent_55%),radial-gradient(35%_30%_at_85%_35%,rgba(34,197,94,0.12),transparent_55%)]"></div>
<div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(60%_55%_at_50%_20%,black,transparent)]"></div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#top">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.03em'}}>NG</span>
</span>
<div className="leading-none">
<div className="text-sm font-semibold tracking-tight text-slate-50">NovaGEO</div>
<div className="text-xs text-slate-400">AI SEO • GEO • Growth</div>
</div>
</a>
<nav className="hidden items-center gap-7 md:flex">
<a className="text-sm text-slate-300 hover:text-slate-50 transition" href="#services">Services</a>
<a className="text-sm text-slate-300 hover:text-slate-50 transition" href="#process">Process</a>
<a className="text-sm text-slate-300 hover:text-slate-50 transition" href="#proof">Results</a>
<a className="text-sm text-slate-300 hover:text-slate-50 transition" href="#insights">Insights</a>
<a className="text-sm text-slate-300 hover:text-slate-50 transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" id="openAudit">
<span className="iconify" data-height="18" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="18"></span>
            Free AI Visibility Audit
          </button>
<button aria-label="Open menu" className="inline-flex md:hidden items-center justify-center rounded-xl bg-white/5 p-2.5 ring-1 ring-white/10 hover:bg-white/10 transition" id="mobileMenuBtn">
<span className="iconify" data-height="18" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-white/10" id="mobileNav">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="grid gap-2">
<a className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition" href="#services">Services</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition" href="#process">Process</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition" href="#proof">Results</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition" href="#insights">Insights</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition" href="#contact">Contact</a>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/15 px-4 py-2.5 text-sm font-medium text-sky-100 ring-1 ring-sky-400/20 hover:bg-sky-500/20 transition" onclick="openModal('auditModal')">
<span className="iconify" data-height="18" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="18"></span>
            Free AI Visibility Audit
          </button>
</div>
</div>
</div>
</header>

<main id="top">
<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
<div className="grid items-start gap-10 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Built for search + AI assistants
              <span className="text-slate-500">•</span>
              GEO-ready content systems
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Newsreader, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              Grow revenue with AI SEO and
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-violet-300 to-emerald-200">Generative Engine Optimization</span>.
            </h1>
<p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl">
              We help modern brands win visibility across search engines and AI answers—by aligning technical SEO, content intelligence, and entity-first positioning for the era of generative discovery.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/15 px-5 py-3 text-sm font-medium text-sky-100 ring-1 ring-sky-400/25 hover:bg-sky-500/20 transition" onclick="openModal('auditModal')">
<span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
                Get your free AI visibility audit
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="document.querySelector('#services').scrollIntoView({behavior:'smooth'})">
<span className="iconify" data-height="18" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18"></span>
                Explore services
              </button>
</div>
<div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
                  SEO
                </div>
<div className="mt-2 text-sm font-medium text-slate-50">Technical + content</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:brain" data-strokeWidth="1.5" data-width="16"></span>
                  GEO
                </div>
<div className="mt-2 text-sm font-medium text-slate-50">AI answer visibility</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 col-span-2 sm:col-span-1">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:line-chart" data-strokeWidth="1.5" data-width="16"></span>
                  Growth
                </div>
<div className="mt-2 text-sm font-medium text-slate-50">Lead + revenue lift</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">AI Visibility Snapshot</div>
<div className="mt-1 text-xs text-slate-400">Example dashboard preview</div>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100 ring-1 ring-emerald-400/15">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                    Live
                  </span>
</div>
</div>
<div className="p-5 sm:p-6 space-y-5">
<div className="grid grid-cols-3 gap-3">
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-400">Search CTR</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-50">+28%</div>
<div className="mt-1 text-xs text-emerald-200/80">last 60 days</div>
</div>
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-400">AI Mentions</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-50">3.2×</div>
<div className="mt-1 text-xs text-emerald-200/80">YoY</div>
</div>
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-400">Leads</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-50">+41%</div>
<div className="mt-1 text-xs text-emerald-200/80">organic</div>
</div>
</div>
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-medium text-slate-50">GEO readiness</div>
<div className="mt-1 text-xs text-slate-400">Entity coverage, citations, and answer formatting</div>
</div>
<span className="text-xs font-medium text-slate-200 bg-white/5 ring-1 ring-white/10 px-2.5 py-1 rounded-lg">82/100</span>
</div>
<div className="mt-4 space-y-3">
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Entity map completeness</span>
<span className="text-slate-300">88%</span>
</div>
<div className="mt-2 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[88%] rounded-full bg-gradient-to-r from-sky-400/70 via-violet-400/70 to-emerald-300/70"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Citation strength</span>
<span className="text-slate-300">74%</span>
</div>
<div className="mt-2 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[74%] rounded-full bg-gradient-to-r from-sky-400/70 via-violet-400/70 to-emerald-300/70"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Answer-friendly formatting</span>
<span className="text-slate-300">85%</span>
</div>
<div className="mt-2 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[85%] rounded-full bg-gradient-to-r from-sky-400/70 via-violet-400/70 to-emerald-300/70"></div>
</div>
</div>
</div>
<div className="mt-4 flex flex-col sm:flex-row gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="openModal('auditModal')">
<span className="iconify" data-height="18" data-icon="lucide:file-scan" data-strokeWidth="1.5" data-width="18"></span>
                      Run your audit
                    </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950/40 px-4 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/5 transition" onclick="openModal('pricingModal')">
<span className="iconify" data-height="18" data-icon="lucide:badge-dollar-sign" data-strokeWidth="1.5" data-width="18"></span>
                      View retainers
                    </button>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="16"></span>
                      Trust signals
                    </div>
<div className="mt-2 text-sm font-medium text-slate-50">Schema + citations</div>
<div className="mt-1 text-xs text-slate-400">Built for attribution</div>
</div>
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:timer" data-strokeWidth="1.5" data-width="16"></span>
                      Time-to-value
                    </div>
<div className="mt-2 text-sm font-medium text-slate-50">2–4 weeks</div>
<div className="mt-1 text-xs text-slate-400">first lift window</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="16"></span>
              No spam. Audit delivered by email.
            </div>
</div>
</div>

<div className="mt-10 sm:mt-12">
<div className="text-xs text-slate-400">Built for teams shipping fast:</div>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-xs text-slate-300 tracking-tight">Atlas Commerce</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-xs text-slate-300 tracking-tight">Lumen SaaS</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-xs text-slate-300 tracking-tight">Northwind Health</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-xs text-slate-300 tracking-tight">Kite Fintech</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-xs text-slate-300 tracking-tight hidden sm:block">Sierra Labs</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-xs text-slate-300 tracking-tight hidden lg:block">Bloom Agency</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Newsreader, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
            Services that compound visibility
          </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300">
            A practical mix of SEO fundamentals and GEO systems designed for how people discover brands through both search and AI-generated answers.
          </p>
</div>
<div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/40 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">AI SEO Strategy</span>
</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-50">Rankings + conversions, aligned</h3>
<p className="mt-2 text-sm text-slate-300">
              Keyword and intent modeling, content briefs, internal linking, and on-page systems that improve qualified traffic—not vanity metrics.
            </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Topic clustering + page architecture</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Content velocity without quality loss</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Conversion-focused SERP positioning</li>
</ul>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/40 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:message-square-text" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">GEO Optimization</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-50">Be cited in AI answers</h3>
<p className="mt-2 text-sm text-slate-300">
              We optimize your entity footprint, citations, and answer formatting so assistants can confidently reference your brand.
            </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Entity map + knowledge alignment</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Answer-ready content modules</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Citation and attribution strategy</li>
</ul>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/40 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:wrench" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Technical SEO</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-50">Fix what blocks growth</h3>
<p className="mt-2 text-sm text-slate-300">
              Crawlability, performance, indexing, and structured data—implemented with clean, measurable improvements.
            </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Core Web Vitals and speed wins</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Schema for rich + AI understanding</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Indexing + log-based diagnostics</li>
</ul>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/40 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Content Systems</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-50">Publish faster with guardrails</h3>
<p className="mt-2 text-sm text-slate-300">
              Build a repeatable process: briefs, templates, QA, and editorial standards so your content stays accurate and on-brand.
            </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Briefs tuned to intent and entities</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Style + fact-check workflow</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Topic authority over time</li>
</ul>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/40 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:megaphone" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Digital Marketing</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-50">Distribution that amplifies SEO</h3>
<p className="mt-2 text-sm text-slate-300">
              We connect content, email, and paid amplification to accelerate learning and compound organic performance.
            </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Campaigns with measurable lift</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Landing pages + CRO essentials</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Retargeting &amp; offer positioning</li>
</ul>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/40 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Measurement</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-50">Dashboards you’ll actually use</h3>
<p className="mt-2 text-sm text-slate-300">
              Clear reporting across search, content, and AI visibility—so you can prioritize what moves pipeline.
            </p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>KPIs tied to revenue</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>AI mention tracking framework</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Weekly prioritized action plan</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Newsreader, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              A simple process that ships
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300">
              We combine strategy, implementation, and iteration. You get a clear plan, clean execution, and measurable outcomes.
            </p>
<div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Typical timeline</div>
<div className="mt-1 text-xs text-slate-400">First lift often appears in weeks, not quarters</div>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">
<span className="iconify" data-height="16" data-icon="lucide:calendar" data-strokeWidth="1.5" data-width="16"></span>
                  2–4 weeks
                </span>
</div>
<div className="mt-5 space-y-3">
<div className="flex items-center gap-3">
<span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10 text-xs font-semibold text-slate-100">1</span>
<div>
<div className="text-sm font-medium text-slate-50">Audit + opportunity map</div>
<div className="text-xs text-slate-400">Technical, content, entities, citations, competitors</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10 text-xs font-semibold text-slate-100">2</span>
<div>
<div className="text-sm font-medium text-slate-50">Implementation sprints</div>
<div className="text-xs text-slate-400">High-impact fixes and content modules shipped weekly</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10 text-xs font-semibold text-slate-100">3</span>
<div>
<div className="text-sm font-medium text-slate-50">Measurement + iteration</div>
<div className="text-xs text-slate-400">Reporting, tests, and compounding improvements</div>
</div>
</div>
</div>
<div className="mt-5">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="openModal('pricingModal')">
<span className="iconify" data-height="18" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="18"></span>
                  See engagement options
                </button>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="border-b border-white/10 p-5 sm:p-6">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">What we deliver</div>
<div className="mt-1 text-xs text-slate-400">Click to preview artifacts</div>
</div>
<span className="text-xs text-slate-400">Interactive</span>
</div>
</div>
<div className="p-5 sm:p-6">
<div className="grid gap-3 sm:grid-cols-2">
<button className="artifactBtn text-left rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition" data-artifact="entity">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:network" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Entity map</span>
</div>
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="mt-3 text-sm font-medium text-slate-50">Coverage gaps + expansion plan</div>
<div className="mt-1 text-xs text-slate-400">Products, features, problems, comparisons, proof</div>
</button>
<button className="artifactBtn text-left rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition" data-artifact="schema">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:braces" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Structured data</span>
</div>
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="mt-3 text-sm font-medium text-slate-50">Schemas that clarify meaning</div>
<div className="mt-1 text-xs text-slate-400">Organization, Product, FAQ, HowTo, Article</div>
</button>
<button className="artifactBtn text-left rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition" data-artifact="brief">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Content briefs</span>
</div>
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="mt-3 text-sm font-medium text-slate-50">Intent + citations, baked in</div>
<div className="mt-1 text-xs text-slate-400">Outlines, entities, FAQs, internal links, proof</div>
</button>
<button className="artifactBtn text-left rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition" data-artifact="report">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs text-slate-300">Reporting</span>
</div>
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="mt-3 text-sm font-medium text-slate-50">Clarity on what to do next</div>
<div className="mt-1 text-xs text-slate-400">Wins, blockers, experiments, priorities</div>
</button>
</div>
<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50" id="artifactTitle">Entity map preview</div>
<div className="mt-1 text-xs text-slate-400" id="artifactDesc">A practical view of what AI models and search engines need to understand about your brand.</div>
</div>
<button aria-label="Get audit" className="rounded-xl bg-slate-950/40 p-2 ring-1 ring-white/10 hover:bg-white/5 transition" onclick="openModal('auditModal')">
<span className="iconify" data-height="18" data-icon="lucide:wand-2" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2" id="artifactList">
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-400">Core entities</div>
<div className="mt-2 text-sm font-medium text-slate-50">Brand • Offer • Category</div>
<div className="mt-1 text-xs text-slate-400">Define “what you are” clearly</div>
</div>
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-400">Supporting entities</div>
<div className="mt-2 text-sm font-medium text-slate-50">Features • Use cases • Proof</div>
<div className="mt-1 text-xs text-slate-400">Connect claims to evidence</div>
</div>
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-400">Comparisons</div>
<div className="mt-2 text-sm font-medium text-slate-50">Alternatives • vs pages</div>
<div className="mt-1 text-xs text-slate-400">Win evaluation queries</div>
</div>
<div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-400">Citations</div>
<div className="mt-2 text-sm font-medium text-slate-50">Mentions + attribution</div>
<div className="mt-1 text-xs text-slate-400">Be reference-worthy</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="proof">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Newsreader, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              Results that show up in pipeline
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300">
              Examples below are illustrative placeholders—swap these with your real numbers and testimonials.
            </p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="openModal('pricingModal')">
<span className="iconify" data-height="18" data-icon="lucide:badge-check" data-strokeWidth="1.5" data-width="18"></span>
            Work with us
          </button>
</div>
<div className="mt-9 grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">B2B SaaS</div>
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100 ring-1 ring-emerald-400/15">
<span className="iconify" data-height="16" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="16"></span>
                Growth
              </span>
</div>
<div className="mt-4 text-2xl font-semibold tracking-tight text-slate-50">+62%</div>
<div className="mt-1 text-sm text-slate-300">organic demos in 90 days</div>
<p className="mt-4 text-sm text-slate-300">
              Rebuilt page architecture, shipped 18 intent-led pages, and improved internal linking + schema.
            </p>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">Local services</div>
<span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-100 ring-1 ring-sky-400/15">
<span className="iconify" data-height="16" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="16"></span>
                Visibility
              </span>
</div>
<div className="mt-4 text-2xl font-semibold tracking-tight text-slate-50">3.1×</div>
<div className="mt-1 text-sm text-slate-300">more calls from search</div>
<p className="mt-4 text-sm text-slate-300">
              Optimized location pages, reviews strategy, and built citation consistency for stronger trust signals.
            </p>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">Ecommerce</div>
<span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-100 ring-1 ring-violet-400/15">
<span className="iconify" data-height="16" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="16"></span>
                GEO
              </span>
</div>
<div className="mt-4 text-2xl font-semibold tracking-tight text-slate-50">+46%</div>
<div className="mt-1 text-sm text-slate-300">AI-attributed visits</div>
<p className="mt-4 text-sm text-slate-300">
              Added answer-ready modules, product entity enhancements, and improved proof + citations across guides.
            </p>
</div>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-2">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-start gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:quote" data-strokeWidth="1.5" data-width="18"></span>
</span>
<div>
<p className="text-sm text-slate-200">
                  “We finally got a plan that connected content to revenue. The weekly priorities kept our team shipping, and results followed.”
                </p>
<div className="mt-3 text-xs text-slate-400">— Marketing Lead, B2B SaaS</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-start gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:quote" data-strokeWidth="1.5" data-width="18"></span>
</span>
<div>
<p className="text-sm text-slate-200">
                  “The GEO work helped us show up in AI answers in our niche. We’re seeing more qualified conversations—fewer tire-kickers.”
                </p>
<div className="mt-3 text-xs text-slate-400">— Founder, Ecommerce brand</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="insights">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Newsreader, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              AI discovery playbook
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300">
              Publish these as short posts, then link each to a full article or lead magnet.
            </p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="openModal('auditModal')">
<span className="iconify" data-height="18" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="18"></span>
            Get the audit
          </button>
</div>
<div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="16"></span>
              GEO fundamentals
            </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-50">What GEO is (and isn’t)</h3>
<p className="mt-2 text-sm text-slate-300">How to get referenced in AI answers: entities, citations, and answer formatting.</p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-100 hover:text-sky-200 transition" onclick="openModal('articleModal'); setArticle('geo')">
              Read outline
              <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</article>
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="16"></span>
              Content systems
            </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-50">The 80/20 content pipeline</h3>
<p className="mt-2 text-sm text-slate-300">A lightweight workflow to publish consistently while maintaining trust and accuracy.</p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-100 hover:text-sky-200 transition" onclick="openModal('articleModal'); setArticle('pipeline')">
              Read outline
              <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</article>
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="16"></span>
              Trust signals
            </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-50">Citations: the new backlink layer</h3>
<p className="mt-2 text-sm text-slate-300">Why being reference-worthy matters, and how to build defensible proof in content.</p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-100 hover:text-sky-200 transition" onclick="openModal('articleModal'); setArticle('citations')">
              Read outline
              <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</article>
</div>
</div>
</section>

<section className="border-t border-white/10" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Newsreader, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              Let’s map your fastest path to visibility
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300">
              Tell us what you sell, who you sell to, and where you want to win. We’ll reply with next steps and (if helpful) a quick Loom.
            </p>
<div className="mt-6 space-y-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-start gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:target" data-strokeWidth="1.5" data-width="18"></span>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Best fit</div>
<div className="mt-1 text-xs text-slate-400">SaaS, ecommerce, local services, and creator-led brands</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-start gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:rocket" data-strokeWidth="1.5" data-width="18"></span>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">What you get</div>
<div className="mt-1 text-xs text-slate-400">Clear priorities, shipped work, and reporting tied to pipeline</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Contact</div>
<div className="mt-1 text-xs text-slate-400">We typically reply within 1 business day</div>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">
<span className="iconify" data-height="16" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="16"></span>
                    Fast response
                  </span>
</div>
</div>
<form className="p-5 sm:p-6 space-y-4" id="contactForm">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="name">Name</label>
<input className="mt-2 w-full rounded-xl bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="email">Email</label>
<input className="mt-2 w-full rounded-xl bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="website">Website</label>
<input className="mt-2 w-full rounded-xl bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="website" name="website" placeholder="https://yourdomain.com" type="url"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="goal">Primary goal</label>
<select className="mt-2 w-full appearance-none rounded-xl bg-slate-950/40 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="goal" name="goal">
<option value="More qualified leads">More qualified leads</option>
<option value="More sales">More sales</option>
<option value="Better rankings">Better rankings</option>
<option value="AI visibility (GEO)">AI visibility (GEO)</option>
<option value="Technical cleanup">Technical cleanup</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="message">What are you trying to improve?</label>
<textarea className="mt-2 w-full rounded-xl bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="message" name="message" placeholder="Briefly describe your offer, audience, and current challenges." required="" rows="5"></textarea>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/15 px-5 py-3 text-sm font-medium text-sky-100 ring-1 ring-sky-400/25 hover:bg-sky-500/20 transition" type="submit">
<span className="iconify" data-height="18" data-icon="lucide:send" data-strokeWidth="1.5" data-width="18"></span>
                    Send message
                  </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="openModal('auditModal')" type="button">
<span className="iconify" data-height="18" data-icon="lucide:file-scan" data-strokeWidth="1.5" data-width="18"></span>
                    Or request the audit
                  </button>
</div>
<div className="hidden rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/15 px-4 py-3 text-xs text-emerald-100" id="formNote">
                  Message ready. This demo doesn’t send emails—copying your details to clipboard instead.
                </div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.03em'}}>NG</span>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">NovaGEO</div>
<div className="text-xs text-slate-400">Digital marketing • AI SEO • GEO</div>
</div>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
<a className="text-slate-300 hover:text-slate-50 transition" href="#services">Services</a>
<a className="text-slate-300 hover:text-slate-50 transition" href="#process">Process</a>
<a className="text-slate-300 hover:text-slate-50 transition" href="#contact">Contact</a>
<button className="text-slate-300 hover:text-slate-50 transition" onclick="openModal('pricingModal')">Engagements</button>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="text-xs text-slate-500">© <span id="year"></span> NovaGEO. All rights reserved.</div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<button className="hover:text-slate-300 transition" onclick="openModal('policyModal')">Privacy</button>
<button className="hover:text-slate-300 transition" onclick="openModal('policyModal')">Terms</button>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50 hidden" id="backdrop">
<div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>

<div className="modalPanel hidden absolute inset-0 flex items-end sm:items-center justify-center p-4" id="auditModal">
<div className="w-full max-w-xl rounded-2xl bg-slate-950 ring-1 ring-white/10 overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Free AI Visibility Audit</div>
<div className="mt-1 text-xs text-slate-400">Get quick wins for SEO + GEO with prioritized next steps.</div>
</div>
<button aria-label="Close" className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="closeModal()">
<span className="iconify" data-height="18" data-icon="lucide:x" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<form className="p-5 sm:p-6 space-y-4" id="auditForm">
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="aWebsite">Website</label>
<input className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="aWebsite" name="website" placeholder="https://yourdomain.com" required="" type="url"/>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="aEmail">Email</label>
<input className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="aEmail" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300" htmlFor="aType">Business type</label>
<select className="mt-2 w-full appearance-none rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30" id="aType" name="type">
<option>SaaS</option>
<option>Ecommerce</option>
<option>Local service</option>
<option>Agency</option>
<option>Creator / Personal brand</option>
<option>Other</option>
</select>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-3">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:list-checks" data-strokeWidth="1.5" data-width="18"></span>
</span>
<div>
<div className="text-sm font-medium text-slate-50">You’ll receive</div>
<ul className="mt-2 space-y-1 text-xs text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="14" data-icon="lucide:check" data-strokeWidth="1.5" data-width="14"></span>Top technical blockers</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="14" data-icon="lucide:check" data-strokeWidth="1.5" data-width="14"></span>Content + entity gaps</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="14" data-icon="lucide:check" data-strokeWidth="1.5" data-width="14"></span>GEO improvements for AI answers</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/15 px-5 py-3 text-sm font-medium text-sky-100 ring-1 ring-sky-400/25 hover:bg-sky-500/20 transition" type="submit">
<span className="iconify" data-height="18" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="18"></span>
              Request audit
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="closeModal()" type="button">
              Cancel
            </button>
</div>
<div className="hidden rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/15 px-4 py-3 text-xs text-emerald-100" id="auditNote">
            Request prepared. This demo copies the request to your clipboard.
          </div>
</form>
</div>
</div>

<div className="modalPanel hidden absolute inset-0 flex items-end sm:items-center justify-center p-4" id="pricingModal">
<div className="w-full max-w-4xl rounded-2xl bg-slate-950 ring-1 ring-white/10 overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Engagement options</div>
<div className="mt-1 text-xs text-slate-400">Use these as placeholders—swap pricing and scope as needed.</div>
</div>
<button aria-label="Close" className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="closeModal()">
<span className="iconify" data-height="18" data-icon="lucide:x" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="p-5 sm:p-6 grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="text-xs text-slate-400">Starter</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-50">Audit + roadmap</div>
<div className="mt-2 text-sm text-slate-300">For teams who want clarity fast.</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Technical + content audit</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Entity + GEO readiness</li>
<li className="flex gap-2"><span className="iconify mt-0.5 text-emerald-200/80" data-height="16" data-icon="lucide:check" data-strokeWidth="1.5" data-width="16"></span>Prioritized 30-day plan</li>
</ul>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="closeModal(); openModal('auditModal')">
<span className="iconify" data-height="18" data-icon="lucide:file-scan" data-strokeWidth="1.5" data-width="18"></span>
              Start with audit
            </button>
</div>
<div className="rounded-2xl bg-gradient-to-b from-sky-500/15 to-violet-500/10 ring-1 ring-sky-400/20 p-6">
<div className="flex items-center justify-between gap-3">
<div className="text-xs text-slate-200">Growth</div>
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100 ring-1 ring-emerald-400/15">
</span></div></div></div></div></div></div>
    </>
  );
}
