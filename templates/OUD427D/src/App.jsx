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
      
    document.addEventListener('DOMContentLoaded', () => {
      const yEl = document.getElementById('year');
      if (yEl) yEl.textContent = new Date().getFullYear();
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });
  
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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-indigo-600/40"></div>
<div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-10 bg-fuchsia-600/40"></div>
</div>

<div className="w-full border-b border-white/10 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between py-2 text-sm">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-200">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i>
<span>Webinar</span>
</div>
<p className="text-neutral-300">Sep 30 • Live Demo: No‑Code Version Control for Qlik Sense</p>
</div>
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-neutral-100 hover:bg-white/10 hover:border-white/20 transition" href="#webinar">
          Save your seat
          <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between py-5">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-neutral-900 font-semibold tracking-tight">S</div>
<span className="text-base font-semibold tracking-tight text-white/90">SenseOps</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#how-it-works">How it works</a>
<a className="hover:text-white transition" href="#integrations">Integrations</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#webinar">Webinar</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-md border border-white/10 px-3 py-1.5 text-sm text-neutral-200 hover:border-white/20 hover:bg-white/5 transition" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40" href="#trial">
            Start 21‑day trial
            <i className="h-4 w-4" data-lucide="sparkles"></i>
</a>
</div>
</div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-8 sm:pt-12 sm:pb-14">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
<i className="h-3.5 w-3.5" data-lucide="badge-check"></i>
            Technology Partner of Qlik
          </div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            No‑code version control for Qlik Sense
          </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-300">
            SenseOps Code Management delivers granular code comparisons, configurable merge workflows, and 1‑click deployments across environments—without writing scripts.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-400 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400/60" href="#trial">
              Start your 21‑day free trial
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm text-neutral-100 hover:bg-white/10 hover:border-white/20 transition" href="#demo">
              Watch 2‑min demo
              <i className="h-4 w-4" data-lucide="play"></i>
</a>
</div>
<div className="mt-4 text-xs text-neutral-400">
            No credit card required • Cancel anytime
          </div>

<div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">70%+</div>
<div className="mt-1 text-xs text-neutral-400">Manual effort saved</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">1‑click</div>
<div className="mt-1 text-xs text-neutral-400">Deploy across environments</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">0 code</div>
<div className="mt-1 text-xs text-neutral-400">No scripting required</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-2xl"></div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur shadow-2xl">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
<span className="ml-2 text-sm text-neutral-300">Compare changes · App: Sales Insights</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="git-branch"></i> feature/region-filters
                </span>
</div>
</div>
<div className="grid md:grid-cols-2">

<div className="p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-neutral-400">Before</span>
<span className="text-[10px] text-neutral-500">commit 7a1c2d</span>
</div>
<pre className="rounded-lg border border-white/10 bg-neutral-950/60 p-3 overflow-auto text-xs text-neutral-200" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
SET vRegion='EMEA';
LOAD
    Customer,
    Country,
    Sales as SalesAmount
FROM [lib://data/sales.qvd] (qvd);
LEFT JOIN (Customers)
LOAD Customer, Segment
FROM [lib://data/customers.qvd] (qvd);</pre>
</div>

<div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-neutral-400">After</span>
<span className="text-[10px] text-neutral-500">commit 9b4f90</span>
</div>
<pre className="rounded-lg border border-white/10 bg-neutral-950/60 p-3 overflow-auto text-xs text-neutral-200" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
SET vRegion='Global';
// Added currency normalization
LOAD
    Customer,
    Country,
    Sales * Rate as SalesAmount,
    Currency
FROM [lib://data/sales.qvd] (qvd);
LEFT JOIN (Customers)
LOAD Customer, Segment, Region
FROM [lib://data/customers.qvd] (qvd);</pre>
</div>
</div>
<div className="border-t border-white/10 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<span className="inline-flex items-center gap-1 rounded px-2 py-1 bg-green-500/10 text-green-300 border border-green-500/20">
<i className="h-3.5 w-3.5" data-lucide="plus"></i> 5 additions
                </span>
<span className="inline-flex items-center gap-1 rounded px-2 py-1 bg-rose-500/10 text-rose-300 border border-rose-500/20">
<i className="h-3.5 w-3.5" data-lucide="minus"></i> 2 deletions
                </span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-100 hover:bg-white/10 hover:border-white/20 transition">
<i className="h-4 w-4" data-lucide="git-merge"></i> Merge
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500 px-3 py-1.5 text-sm text-white hover:bg-indigo-400 transition">
<i className="h-4 w-4" data-lucide="rocket"></i> 1‑click Deploy
                </button>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-4">
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 shadow-lg">
<div className="h-6 w-6 rounded-md bg-white text-neutral-900 flex items-center justify-center text-xs font-semibold tracking-tight">Q</div>
<div className="text-xs">
<div className="text-neutral-100">Optimized for Qlik Sense</div>
<div className="text-neutral-400">No extensions required</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 border-t border-white/10 pt-6">
<div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span>Trusted Integrations:</span>
<div className="flex items-center gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 tracking-tight text-white/90">GH</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 tracking-tight text-white/90">GL</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 tracking-tight text-white/90">BB</span>
</div>
<span className="ml-auto">Based in Palo Alto, CA</span>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="diff"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Granular comparisons</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Accurate change detection across load scripts, variables, expressions, and visual objects—down to line‑level diffs.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="workflow"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Configurable merge workflows</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Define approvers, enforce policies, and automate gates that fit your governance model.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="rocket"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">1‑click deployment</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Promote changes across Dev, Test, and Prod in a single action, with automatic rollbacks.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="cloud"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Cloud Git integration</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Connect to GitHub, GitLab, or Bitbucket with secure tokens and branch strategies you already use.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="history"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Audit &amp; traceability</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Full history of changes, reviewers, and deployments with exportable reports.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Governance built‑in</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Role‑based permissions, protected branches, and policy checks ensure compliant releases.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="mb-8 sm:mb-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">From idea to production in minutes</h2>
<p className="mt-2 text-neutral-300">A streamlined flow designed specifically for Qlik Sense developers and analytics teams.</p>
</div>
<div className="grid lg:grid-cols-4 gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="plug"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Connect</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Link your Qlik tenant and Git provider securely.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="compare"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Compare</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">See precise diffs on scripts, variables, and visual elements.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="git-merge"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Merge</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Route through configurable approval workflows.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/20 p-2 text-indigo-300">
<i className="h-5 w-5" data-lucide="send"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Deploy</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">1‑click promotion to Test and Prod with rollback.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="integrations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="mb-8 sm:mb-10 flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Easy integration to cloud Git platforms</h2>
<p className="mt-2 text-neutral-300">Seamless connections with OAuth or PATs, branching, PRs, and protected rules.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-100 hover:bg-white/10 hover:border-white/20 transition" href="#trial">
          Connect now
          <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-neutral-900 flex items-center justify-center font-semibold tracking-tight">GH</div>
<div>
<div className="text-white font-medium">GitHub</div>
<div className="text-xs text-neutral-400">Cloud &amp; Enterprise</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-300" data-lucide="lock"></i>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-neutral-900 flex items-center justify-center font-semibold tracking-tight">GL</div>
<div>
<div className="text-white font-medium">GitLab</div>
<div className="text-xs text-neutral-400">SaaS &amp; Self‑Managed</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-300" data-lucide="lock"></i>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-neutral-900 flex items-center justify-center font-semibold tracking-tight">BB</div>
<div>
<div className="text-white font-medium">Bitbucket</div>
<div className="text-xs text-neutral-400">Cloud</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-300" data-lucide="lock"></i>
</div>
</div>
<div className="mt-4 text-xs text-neutral-400">Bring your own repos, branches, and permissions. No changes to your existing workflows.</div>
</div>
</section>

<section className="relative z-10" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Start your 21‑day free trial</h2>
<p className="mt-2 text-neutral-300">Experience streamlined reviews, merges, and deployments—cut 70%+ of manual effort across your Qlik Sense lifecycle.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2"><i className="h-4 w-4 text-indigo-300 mt-0.5" data-lucide="check-circle-2"></i> Full access to compare, merge, and deploy</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-indigo-300 mt-0.5" data-lucide="check-circle-2"></i> Connect your own Git provider</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-indigo-300 mt-0.5" data-lucide="check-circle-2"></i> Guided onboarding and support</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6" id="trial">
<div className="flex items-center justify-between">
<div>
<div className="text-white font-medium">Trial Access</div>
<div className="text-xs text-neutral-400">No credit card required</div>
</div>
<div className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 21 days
            </div>
</div>
<form className="mt-4 space-y-3">
<div>
<label className="text-xs text-neutral-300" htmlFor="email">Work email</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-indigo-400/50 focus:ring-0" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="text-xs text-neutral-300" htmlFor="company">Company</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-indigo-400/50 focus:ring-0" id="company" placeholder="Your company" type="text"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition" type="submit">
              Get started free
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<p className="text-[11px] text-neutral-500">By starting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="webinar">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8">
<div className="grid md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
<i className="h-3.5 w-3.5" data-lucide="calendar-days"></i>
              Sep 30 · Live Webinar
            </div>
<h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">See SenseOps in action</h3>
<p className="mt-2 text-neutral-300">Walk through granular comparisons, configurable merges, and 1‑click deployments tailored for Qlik Sense.</p>
</div>
<div className="w-full">
<form className="space-y3">
<input className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-indigo-400/50 focus:ring-0" placeholder="name@company.com" required="" type="email"/>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100 transition">
                Reserve my spot
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<div className="text-[11px] text-neutral-500">Limited seats · Recording will be shared</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-neutral-900 font-semibold tracking-tight">S</div>
<span className="text-base font-semibold tracking-tight text-white/90">SenseOps</span>
</div>
<p className="mt-3 text-sm text-neutral-400">Code Management for Qlik Sense. Based in Palo Alto, CA.</p>
<div className="mt-3 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="badge-check"></i> Technology Partner of Qlik
          </div>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Product</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#features">Features</a></li>
<li><a className="hover:text-white transition" href="#how-it-works">How it works</a></li>
<li><a className="hover:text-white transition" href="#integrations">Integrations</a></li>
<li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Resources</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#webinar">Webinar</a></li>
<li><a className="hover:text-white transition" href="#demo">Demo</a></li>
<li><a className="hover:text-white transition" href="#contact">Support</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Get started</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#trial">Start 21‑day trial</a></li>
<li><a className="hover:text-white transition" href="#">Request a quote</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500">
<p>© <span id="year">2025</span> SenseOps. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300" href="#">Privacy</a>
<a className="hover:text-neutral-300" href="#">Terms</a>
<a className="hover:text-neutral-300" href="#">Security</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
