import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      window.lucide && lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-neutral-900/60">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3 group" href="#">
<div className="h-7 w-7 rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 grid place-items-center text-neutral-100 group-hover:ring-neutral-700 transition">
<span className="text-[11px] font-semibold tracking-tight">AI</span>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-50">AnyOne</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition" href="#how">How it works</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition" href="#examples">Examples</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition" href="#features">Features</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition" href="#pricing">Pricing</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-3.5 py-2 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60" href="#waitlist">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Join waitlist
            </a>
<button aria-label="Open menu" className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-md ring-1 ring-inset ring-neutral-800 hover:ring-neutral-700 transition">
<i className="w-4 h-4" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120rem] h-[120rem] bg-[radial-gradient(closest-side,rgba(110,110,110,0.08),transparent_60%)]"></div>
</div>
<div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24 pb-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-neutral-300">
<i className="w-4 h-4" data-lucide="zap"></i>
              Launch in weeks, not months
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-50">
              Anyone. Any idea. Build your first app with AI in weeks.
            </h1>
<p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Turn an idea into a working product using guided AI workflows, no‑code templates, and battle‑tested playbooks. Ship faster than ever—even if you’ve never built before.
            </p>
<form action="#" className="mt-8 flex flex-col sm:flex-row gap-3" id="waitlist" method="post">
<div className="relative flex-1">
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 px-4 py-3 text-sm ring-1 ring-inset ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400/50" id="email" name="email" placeholder="your@email.com" required="" type="email"/>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="w-4 h-4 text-neutral-500" data-lucide="mail"></i>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60" type="submit">
                Get started free
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
<div className="mt-6 flex items-center gap-6 text-xs text-neutral-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                No credit card
              </div>
<div className="hidden sm:flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
                10–15 min/day routines
              </div>
<div className="hidden md:flex items-center gap-2">
<i className="w-4 h-4" data-lucide="lock"></i>
                Privacy-first
              </div>
</div>
</div>
<div className="relative">
<div className="rounded-xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900">
<img alt="Landscape background" className="w-full h-72 sm:h-96 object-cover opacity-80" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<div className="flex items-center gap-2 text-xs text-neutral-300 mb-3">
<i className="w-4 h-4" data-lucide="bot"></i>
                  AI Guide
                </div>
<div className="rounded-lg bg-neutral-900/80 ring-1 ring-inset ring-neutral-800 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-800 grid place-items-center ring-1 ring-neutral-700">
<i className="w-4 h-4 text-neutral-200" data-lucide="message-square"></i>
</div>
<div className="flex-1">
<p className="text-sm text-neutral-200">
                        Let’s turn your idea into a real product. I’ll help you define scope, pick tools, and ship a demo in two weeks.
                      </p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-neutral-800/80 px-2.5 py-1.5 text-xs ring-1 ring-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="wand-2"></i>
                          Generate MVP plan
                        </span>
<span className="inline-flex items-center gap-2 rounded-md bg-neutral-800/80 px-2.5 py-1.5 text-xs ring-1 ring-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="rocket"></i>
                          Ship checklist
                        </span>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-400">Real guidance. Tiny steps. Fast results.</p>
</div>
</div>
</div>
</div>

<div className="mt-14 border-t border-neutral-900/60 pt-8">
<p className="text-xs text-neutral-400">Makers from</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="h-10 rounded-md ring-1 ring-inset ring-neutral-800 bg-neutral-900/50 grid place-items-center text-neutral-400 text-[11px] font-medium tracking-tight">NX</div>
<div className="h-10 rounded-md ring-1 ring-inset ring-neutral-800 bg-neutral-900/50 grid place-items-center text-neutral-400 text-[11px] font-medium tracking-tight">QV</div>
<div className="h-10 rounded-md ring-1 ring-inset ring-neutral-800 bg-neutral-900/50 grid place-items-center text-neutral-400 text-[11px] font-medium tracking-tight">ALPHA</div>
<div className="h-10 rounded-md ring-1 ring-inset ring-neutral-800 bg-neutral-900/50 grid place-items-center text-neutral-400 text-[11px] font-medium tracking-tight">ZE</div>
<div className="h-10 rounded-md ring-1 ring-inset ring-neutral-800 bg-neutral-900/50 grid place-items-center text-neutral-400 text-[11px] font-medium tracking-tight">TC</div>
<div className="h-10 rounded-md ring-1 ring-inset ring-neutral-800 bg-neutral-900/50 grid place-items-center text-neutral-400 text-[11px] font-medium tracking-tight">UXL</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16" id="how">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">A simple plan to launch in weeks</h2>
<p className="mt-3 text-neutral-300 text-base">Guided steps that fit into 10–15 minutes a day. Build momentum without burning out.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-neutral-100 transition" href="#waitlist">
          See curriculum
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-5 hover:ring-neutral-700 transition">
<div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Week 1
          </div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-100">Idea to MVP plan</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="target"></i>
              Nail scope with AI prompts and constraints
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="layout-dashboard"></i>
              Choose a template and no‑code stack
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="list-checks"></i>
              7‑day build schedule
            </li>
</ul>
</div>

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-5 hover:ring-neutral-700 transition">
<div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Week 2
          </div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-100">Build the core</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="code-2"></i>
              Generate UI, copy, and data models
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="bolt"></i>
              AI‑assisted automations and workflows
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="router"></i>
              Connect auth, payments, and forms
            </li>
</ul>
</div>

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-5 hover:ring-neutral-700 transition">
<div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Week 3
          </div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-100">Ship and iterate</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="rocket"></i>
              Launch checklist and landing page
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="megaphone"></i>
              First users, feedback loops, north‑star metrics
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="repeat"></i>
              Weekly iteration cadence
            </li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 border-t border-neutral-900/60" id="examples">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">What you can build</h2>
<p className="mt-3 text-neutral-300">Realistic projects you can ship with our playbooks and templates.</p>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="group rounded-xl overflow-hidden ring-1 ring-inset ring-neutral-800 hover:ring-neutral-700 transition bg-neutral-900/50">
<img alt="SaaS dashboard preview" className="h-44 w-full object-cover opacity-85 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="app-window"></i>
              SaaS MVP
            </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-neutral-100">Subscription analytics tool</h3>
<p className="mt-1.5 text-sm text-neutral-300">Auth, billing, dashboards, and alerts—generated and wired up in days.</p>
</div>
</div>

<div className="group rounded-xl overflow-hidden ring-1 ring-inset ring-neutral-800 hover:ring-neutral-700 transition bg-neutral-900/50">
<img alt="Automation and workflows" className="h-44 w-full object-cover opacity-85 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="workflow"></i>
              Automation
            </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-neutral-100">Lead capture to outreach</h3>
<p className="mt-1.5 text-sm text-neutral-300">Forms, enrichment, scoring, and personalized outreach—hands‑off.</p>
</div>
</div>

<div className="group rounded-xl overflow-hidden ring-1 ring-inset ring-neutral-800 hover:ring-neutral-700 transition bg-neutral-900/50">
<img alt="AI assistant" className="h-44 w-full object-cover opacity-85 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="bot"></i>
              AI Assistant
            </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-neutral-100">Support or research copilot</h3>
<p className="mt-1.5 text-sm text-neutral-300">Retrieval, prompts, safeguards, and a chat UI out of the box.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 border-t border-neutral-900/60" id="features">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">Everything you need to ship</h2>
<p className="mt-3 text-neutral-300">We combine AI guidance with production‑ready building blocks so you can focus on what matters—your idea.</p>
<div className="mt-8 space-y-5">
<div className="flex gap-4">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-neutral-800 grid place-items-center">
<i className="w-5 h-5" data-lucide="sparkle"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100">Guided AI mentor</h3>
<p className="mt-1 text-sm text-neutral-300">Daily prompts, critiques, and next steps tailored to your project.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-neutral-800 grid place-items-center">
<i className="w-5 h-5" data-lucide="blocks"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100">No‑code templates</h3>
<p className="mt-1 text-sm text-neutral-300">Drop‑in UIs, auth, billing, and integration recipes. Customize fast.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-neutral-800 grid place-items-center">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100">Safety &amp; privacy</h3>
<p className="mt-1 text-sm text-neutral-300">Guardrails and best practices to keep your app and users secure.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-neutral-800 grid place-items-center">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100">Creator community</h3>
<p className="mt-1 text-sm text-neutral-300">Build alongside peers. Share wins, roadblocks, and feedback loops.</p>
</div>
</div>
</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 bg-neutral-900/60 p-6">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="activity"></i>
            Your weekly rhythm
          </div>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900 ring-1 ring-neutral-800 p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-100">Mon</div>
<p className="mt-1 text-sm text-neutral-300">Plan tasks with AI, set constraints</p>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-neutral-800 p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-100">Tue–Thu</div>
<p className="mt-1 text-sm text-neutral-300">Build (10–15 min modules)</p>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-neutral-800 p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-100">Fri</div>
<p className="mt-1 text-sm text-neutral-300">Demo, feedback, iterate</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between rounded-lg bg-neutral-900 ring-1 ring-neutral-800 p-4">
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-100">Micro‑wins tracker</div>
<p className="text-xs text-neutral-400 mt-1">Stay motivated with visible progress.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-3 py-2 text-xs font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60">
              Preview
              <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 border-t border-neutral-900/60">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">Makers shipping their first products</h2>
<p className="mt-3 text-neutral-300">Stories from first‑time builders who launched with our guidance.</p>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-1 ring-neutral-800" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-100">Lena M.</div>
<div className="text-xs text-neutral-400">Designer → Founder</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">I went from sketch to paying users in 16 days. The AI mentor kept me focused and unblocked.</p>
</div>

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-1 ring-neutral-800" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-100">Ravi K.</div>
<div className="text-xs text-neutral-400">Ops → Builder</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">The templates were plug‑and‑play. I shipped an internal tool that saved my team hours per week.</p>
</div>

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-1 ring-neutral-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-100">Maya M.</div>
<div className="text-xs text-neutral-400">PM → Indie</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">I thought building was only for devs. Now I’m iterating weekly and talking to users.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 border-t border-neutral-900/60" id="pricing">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">Choose your pace</h2>
<p className="mt-3 text-neutral-300">Start free. Upgrade when you’re ready to accelerate.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-6 flex flex-col">
<div className="text-sm font-semibold tracking-tight text-neutral-100">Starter</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-neutral-50">$0</div>
<p className="mt-2 text-sm text-neutral-300">Perfect to explore and plan your MVP.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300 flex-1">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              AI mentor (limited)
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              3 templates
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              Launch checklist
            </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-4 py-2.5 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60">
            Get started
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="rounded-xl ring-1 ring-inset ring-neutral-700 bg-neutral-900 p-6 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
<div className="inline-flex items-center gap-2 text-xs text-neutral-200">
<i className="w-4 h-4" data-lucide="star"></i>
            Most popular
          </div>
<div className="mt-2 text-sm font-semibold tracking-tight text-neutral-100">Launch</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-neutral-50">$19</div>
<p className="mt-2 text-sm text-neutral-300">Everything to launch and iterate fast.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300 flex-1">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              Full AI mentor
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              10+ templates &amp; automations
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              Priority support
            </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-4 py-2.5 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60">
            Upgrade
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="rounded-xl ring-1 ring-inset ring-neutral-800 bg-neutral-900/60 p-6 flex flex-col">
<div className="text-sm font-semibold tracking-tight text-neutral-100">Studio</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-neutral-50">$49</div>
<p className="mt-2 text-sm text-neutral-300">Scale, collaborate, and automate more.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300 flex-1">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              Team seats &amp; reviews
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              Advanced automations
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="check"></i>
              1:1 launch audit
            </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-4 py-2.5 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60">
            Try Studio
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 border-t border-neutral-900/60" id="faq">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">Common questions</h2>
<div className="mt-8 divide-y divide-neutral-900/70 rounded-xl ring-1 ring-neutral-800 bg-neutral-900/60">
<details className="group p-5">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="text-base font-medium text-neutral-100">Do I need to know how to code?</span>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">No. You can build with templates and automations. If you do code, you can mix both approaches.</p>
</details>
<details className="group p-5">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="text-base font-medium text-neutral-100">How fast can I launch?</span>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Most makers ship a public demo in 2–3 weeks, spending 10–15 minutes a day.</p>
</details>
<details className="group p-5">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="text-base font-medium text-neutral-100">What does the AI mentor actually do?</span>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">It breaks work into tiny steps, generates drafts, reviews your progress, and removes blockers with targeted prompts.</p>
</details>
<details className="group p-5">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="text-base font-medium text-neutral-100">Can I bring my own tools?</span>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Yes. Use your preferred stack or no‑code tools—our playbooks are tool‑agnostic.</p>
</details>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 border-t border-neutral-900/60">
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60 p-8 md:p-10">
<div className="grid md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Ready to build your first app?</h3>
<p className="mt-2 text-neutral-300">Join the waitlist and get the 2‑week MVP planner, free.</p>
</div>
<form action="#" className="flex flex-col sm:flex-row gap-3" method="post">
<div className="relative flex-1">
<label className="sr-only" htmlFor="cta-email">Email</label>
<input className="w-full rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 px-4 py-3 text-sm ring-1 ring-inset ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400/50" id="cta-email" name="email" placeholder="name@domain.com" required="" type="email"/>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="w-4 h-4 text-neutral-500" data-lucide="inbox"></i>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60" type="submit">
              Join free
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-neutral-900/60">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 grid place-items-center text-neutral-100">
<span className="text-[11px] font-semibold tracking-tight">AI</span>
</div>
<div className="text-sm font-semibold tracking-tight text-neutral-100">AnyOne</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-neutral-400 hover:text-neutral-200 transition" href="#">Terms</a>
<a className="text-neutral-400 hover:text-neutral-200 transition" href="#">Privacy</a>
<a className="text-neutral-400 hover:text-neutral-200 transition" href="#">Contact</a>
</div>
</div>
<p className="mt-6 text-xs text-neutral-500">© <span id="year"></span> AnyOne. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
