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
      
      document.getElementById('year').textContent = new Date().getFullYear();
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuBtn.innerHTML = mobileMenu.classList.contains('hidden')
          ? '<i data-lucide="menu" class="h-5 w-5"></i>'
          : '<i data-lucide="x" class="h-5 w-5"></i>';
        lucide.createIcons();
      });
      lucide.createIcons();
    
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
<div className="absolute inset-x-0 -top-32 blur-3xl">
<div className="mx-auto max-w-7xl">
<div className="h-64 w-full rounded-full bg-gradient-to-r from-indigo-200/40 via-sky-200/30 to-cyan-200/40"></div>
</div>
</div>
<div className="absolute -bottom-32 right-0 left-0 mx-auto max-w-5xl blur-3xl">
<div className="h-56 w-full rounded-full bg-gradient-to-r from-fuchsia-200/30 via-violet-200/30 to-indigo-200/30"></div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<img alt="FlowScale AI logo" className="h-7 w-7" src="https://i.postimg.cc/2Srq4WVk/Group-1.png"/>
<span className="text-lg font-medium tracking-tight">FlowScale AI</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-700 hover:text-slate-900 transition" href="#features">Features</a>
<a className="text-sm font-normal text-slate-700 hover:text-slate-900 transition" href="#how">How it works</a>
<a className="text-sm font-normal text-slate-700 hover:text-slate-900 transition" href="#showcase">Showcase</a>
<a className="text-sm font-normal text-slate-700 hover:text-slate-900 transition" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden md:inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-slate-400/30" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-slate-400/30" href="#">
<i className="h-4 w-4" data-lucide="zap"></i>
              Get started
            </a>
<button className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:text-slate-900 hover:shadow transition" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="grid gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
<a className="rounded-lg px-3 py-2 text-sm font-normal text-slate-700 hover:bg-slate-50" href="#features">Features</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-slate-700 hover:bg-slate-50" href="#how">How it works</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-slate-700 hover:bg-slate-50" href="#showcase">Showcase</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-slate-700 hover:bg-slate-50" href="#pricing">Pricing</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
<div className="grid items-center gap-12 md:grid-cols-2">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Now shipping: Workflow Orchestrator v2.1
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Scale AI workflows with precision and calm
            </h1>
<p className="text-base md:text-lg font-normal text-slate-700 leading-relaxed">
              Orchestrate, observe, and optimize everything—from prompts to pipelines—without the chaos.
              FlowScale brings sensible defaults, gorgeous visibility, and effortless control.
            </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex justify-center items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-slate-400/30" href="#">
<i className="h-5 w-5" data-lucide="play-circle"></i>
                Quick demo
              </a>
<a className="inline-flex justify-center items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-slate-400/30" href="#">
<i className="h-5 w-5" data-lucide="arrow-right"></i>
                Explore the docs
              </a>
</div>
<div className="flex items-center gap-6 pt-2">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm font-normal text-slate-600">Loved by teams building agents, LLM apps, and data workflows.</p>
</div>
</div>
<div className="relative">
<div className="absolute -top-6 -right-6 z-0 h-24 w-24 rounded-full bg-cyan-200/40 blur-2xl"></div>
<div className="absolute -bottom-8 -left-8 z-0 h-28 w-28 rounded-full bg-indigo-200/40 blur-2xl"></div>
<div className="relative z-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
<div className="rounded-xl bg-gradient-to-b from-slate-50 to-white p-2">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between pb-3">
<div className="flex items-center gap-2">
<img alt="FlowScale AI logo" className="h-6 w-6" src="https://i.postimg.cc/2Srq4WVk/Group-1.png"/>
<span className="text-sm font-medium text-slate-900 tracking-tight">Orchestrator</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<i className="h-4 w-4" data-lucide="server"></i>
<i className="h-4 w-4" data-lucide="signal"></i>
<i className="h-4 w-4" data-lucide="shield"></i>
</div>
</div>
<div className="grid gap-4 md:grid-cols-2">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4" data-lucide="workflow"></i>
<span className="text-sm font-medium">Pipeline</span>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center justify-between">
<span className="text-xs text-slate-600">Ingest</span>
<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">OK</span>
</li>
<li className="flex items-center justify-between">
<span className="text-xs text-slate-600">Embed</span>
<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">OK</span>
</li>
<li className="flex items-center justify-between">
<span className="text-xs text-slate-600">Index</span>
<span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">Warn</span>
</li>
</ul>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4" data-lucide="activity"></i>
<span className="text-sm font-medium">Latency</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-slate-50 p-3 text-center">
<div className="text-xl font-semibold tracking-tight text-slate-900">132ms</div>
<div className="text-[11px] text-slate-600">p50</div>
</div>
<div className="rounded-lg bg-slate-50 p-3 text-center">
<div className="text-xl font-semibold tracking-tight text-slate-900">261ms</div>
<div className="text-[11px] text-slate-600">p90</div>
</div>
<div className="rounded-lg bg-slate-50 p-3 text-center">
<div className="text-xl font-semibold tracking-tight text-slate-900">488ms</div>
<div className="text-[11px] text-slate-600">p99</div>
</div>
</div>
</div>
</div>
<div className="mt-4 rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span className="text-sm font-medium">Autoscaling</span>
</div>
<span className="text-xs text-slate-600">4 → 18 workers</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-slate-100">
<div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" style={{width: '72%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:shadow-sm transition">
<i className="h-3.5 w-3.5" data-lucide="code-2"></i>
                      View YAML
                    </button>
<button className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:opacity-95 transition">
<i className="h-3.5 w-3.5" data-lucide="zap"></i>
                      Deploy
                    </button>
</div>
</div>
</div>
</div>
<p className="mt-4 text-center text-xs text-slate-500">Live preview mock — for illustration only.</p>
</div>
</div>
</div>
</section>

<section className="py-6">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-center gap-8 opacity-70">
<img alt="" className="h-6 w-auto" src="https://i.postimg.cc/2Srq4WVk/Group-1.png"/>
<div className="h-5 w-px bg-slate-200"></div>
<img alt="" className="h-6 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-6 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-6 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-6 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Everything you need to run AI in production</h2>
<p className="mt-4 text-base md:text-lg text-slate-700">
            Build fast, ship safely, and keep everything observable. Seamless alignment across sections, with balanced rhythm and spacing.
          </p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="h-5 w-5" data-lucide="workflow"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Visual Orchestration</h3>
<p className="mt-2 text-sm text-slate-700">Compose steps, branches, and tools with clarity. Zero-friction edits and rollbacks.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
<i className="h-5 w-5" data-lucide="bot"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Agent Tooling</h3>
<p className="mt-2 text-sm text-slate-700">Tools, memory, evals, and guards that slot into your stack—no lock-in.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<i className="h-5 w-5" data-lucide="activity"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Observability</h3>
<p className="mt-2 text-sm text-slate-700">Traces, cost, latency, and outcomes in one calm dashboard.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
<i className="h-5 w-5" data-lucide="lock"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Security by Default</h3>
<p className="mt-2 text-sm text-slate-700">Keys vaulting, RBAC, SOC2-ready controls—designed to pass audits.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
<i className="h-5 w-5" data-lucide="wand-2"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Prompt Studio</h3>
<p className="mt-2 text-sm text-slate-700">Versioned prompts with tests, datasets, and structured outputs.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
<i className="h-5 w-5" data-lucide="rocket"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Autoscaling</h3>
<p className="mt-2 text-sm text-slate-700">Scale up on demand, back down to zero when idle—costs tamed.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="showcase">
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-center gap-8 md:grid-cols-2">
<div className="space-y-4">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Aesthetic, aligned, and calm by design</h3>
<p className="text-base text-slate-700">
              Subtle gradients and balanced spacing keep the interface clean. Cards and sections snap to a consistent grid so every element lines up precisely.
            </p>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-700">Consistent 8px spacing scale and aligned baselines</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-700">Semibold headings, medium labels, readable body</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-700">Subtle shadows and borders for depth without noise</span>
</li>
</ul>
<div className="pt-2">
<a className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:shadow transition" href="#">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
                See full UI kit
              </a>
</div>
</div>
<div className="grid gap-4">
<div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="how">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-2xl text-center">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight">From idea to production in three steps</h3>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="text-sm font-medium">1</span>
</div>
<span className="text-sm font-medium text-slate-700">Model &amp; tools</span>
</div>
<p className="mt-3 text-sm text-slate-700">Connect providers, pick models, and attach tools and memory.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="text-sm font-medium">2</span>
</div>
<span className="text-sm font-medium text-slate-700">Compose workflow</span>
</div>
<p className="mt-3 text-sm text-slate-700">Drag, branch, test, and version your pipeline with guardrails.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="text-sm font-medium">3</span>
</div>
<span className="text-sm font-medium text-slate-700">Ship &amp; observe</span>
</div>
<p className="mt-3 text-sm text-slate-700">Deploy with autoscaling. Track cost, latency, and outcomes.</p>
</div>
</div>
</div>
</section>

<section className="py-10">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3 text-center">
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">99.98%</div>
<div className="text-sm text-slate-600">SLA uptime</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">-42%</div>
<div className="text-sm text-slate-600">Avg. cost reduction</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">2.5×</div>
<div className="text-sm text-slate-600">Faster iteration</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-2xl text-center">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight">Simple pricing that scales</h3>
<p className="mt-4 text-base md:text-lg text-slate-700">Start free. Upgrade when you’re ready.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="text-sm font-medium text-slate-700">Starter</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">$0</div>
<p className="mt-2 text-sm text-slate-700">For prototypes and personal use.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> 5K runs / mo</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Basic observability</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Community support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:shadow-sm transition" href="#">Get started</a>
</div>
<div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-700">Team</div>
<span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-white">Popular</span>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">$49</div>
<p className="mt-2 text-sm text-slate-700">For growing teams shipping to prod.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> 250K runs / mo</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Traces &amp; cost analytics</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Role-based access</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-95 transition" href="#">Start free trial</a>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="text-sm font-medium text-slate-700">Enterprise</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">Custom</div>
<p className="mt-2 text-sm text-slate-700">For orgs with advanced needs.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> SSO/SAML, VPC, on-prem</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Dedicated support</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Compliance add-ons</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:shadow-sm transition" href="#">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="mx-auto max-w-7xl px-6">
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-8 shadow-sm">
<div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
<div className="absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-indigo-400/20 blur-2xl"></div>
<div className="relative grid items-center gap-6 md:grid-cols-2">
<div>
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Bring order to your AI stack</h4>
<p className="mt-2 text-sm md:text-base text-slate-300">Ship confidently with a platform that stays out of your way and lets you focus on outcomes.</p>
</div>
<div className="flex justify-start md:justify-end gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:shadow-sm transition" href="#">
<i className="h-4 w-4" data-lucide="download"></i>
                Try the CLI
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
                Talk to us
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid gap-8 md:grid-cols-4">
<div className="space-y-3">
<div className="flex items-center gap-2">
<img alt="FlowScale AI logo" className="h-6 w-6" src="https://i.postimg.cc/2Srq4WVk/Group-1.png"/>
<span className="text-sm font-medium tracking-tight">FlowScale AI</span>
</div>
<p className="text-sm text-slate-600">Orchestrate, observe, and optimize your AI workflows.</p>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Product</div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li><a className="hover:text-slate-900" href="#features">Features</a></li>
<li><a className="hover:text-slate-900" href="#pricing">Pricing</a></li>
<li><a className="hover:text-slate-900" href="#">Changelog</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Resources</div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li><a className="hover:text-slate-900" href="#">Docs</a></li>
<li><a className="hover:text-slate-900" href="#">Guides</a></li>
<li><a className="hover:text-slate-900" href="#">Status</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Company</div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
<p className="text-xs text-slate-500">© <span id="year"></span> FlowScale AI. All rights reserved.</p>
<div className="flex items-center gap-4 text-slate-600">
<a className="text-xs hover:text-slate-900" href="#">Privacy</a>
<a className="text-xs hover:text-slate-900" href="#">Terms</a>
<a className="text-xs hover:text-slate-900" href="#">Security</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
