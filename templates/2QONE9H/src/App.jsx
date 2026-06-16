import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl opacity-30 animate-pulse" style={{background: 'radial-gradient(50% 50% at 50% 50%, #1F3A8A 0%, rgba(31,58,138,0) 60%)', animationDuration: '8s'}}></div>
<div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-20 animate-pulse" style={{background: 'radial-gradient(50% 50% at 50% 50%, #22D3EE 0%, rgba(34,211,238,0) 60%)', animationDuration: '10s'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_15%)]"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
<div className="mx-auto max-w-7xl px-5">
<div className="flex h-16 items-center justify-between border-b border-white/10">
<a className="flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-[13px] font-semibold tracking-tight">MP</span>
</div>
<span className="text-[15px] font-medium tracking-tight text-white/80 hover:text-white transition">GenAI Agents Cohort</span>
</a>
<nav className="hidden md:flex items-center gap-7">
<a className="text-[15px] text-white/70 hover:text-white transition" href="#outcomes">Outcomes</a>
<a className="text-[15px] text-white/70 hover:text-white transition" href="#curriculum">Curriculum</a>
<a className="text-[15px] text-white/70 hover:text-white transition" href="#schedule">Schedule</a>
<a className="text-[15px] text-white/70 hover:text-white transition" href="#pricing">Pricing</a>
<a className="text-[15px] text-white/70 hover:text-white transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-[15px] font-medium tracking-tight hover:bg-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 ring-offset-black" href="#apply">Reserve your seat</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:pt-20 md:pb-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

<div className="flex flex-col">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<i className="h-3.5 w-3.5" data-lucide="alert-triangle"></i>
              Roles are shifting fast. Don’t get replaced—lead the change.
            </div>
<h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Build production GenAI Agents in Copilot Studio — without coding
            </h1>
<p className="mt-4 text-[17px] md:text-[18px] text-white/80">
              A 4-week, weekend-only program to design, launch and govern business‑ready AI agents. Hands‑on labs. Real workflows. No dev background required.
            </p>
<div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
<a className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-[15px] font-medium tracking-tight hover:bg-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 ring-offset-black" href="#apply">
<i className="mr-2 h-4 w-4" data-lucide="rocket"></i>
                Reserve your seat
              </a>
<a className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/0 px-5 py-3 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/5 transition" href="#curriculum">
<i className="mr-2 h-4 w-4" data-lucide="book-open"></i>
                See curriculum
              </a>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-[12px] uppercase text-white/50">Next cohort</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">15 Sept 2025</div>
<div className="mt-1 text-[13px] text-white/70 flex items-center">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="timer"></i>
<span aria-live="polite" id="countdown">—</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-[12px] uppercase text-white/50">Format</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">Weekend live</div>
<div className="mt-1 text-[13px] text-white/70">Sat &amp; Sun · 3 hours/day · 4 weeks</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-[12px] uppercase text-white/50">Tuition</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">INR 30,000</div>
<div className="mt-1 text-[13px] text-white/70">USD equivalent at checkout</div>
</div>
</div>
<div className="mt-6 flex items-center gap-3 text-[13px] text-white/70">
<i className="h-4 w-4" data-lucide="shield-check"></i>
              Seats are limited. Applications reviewed on a rolling basis.
            </div>
</div>

<div className="relative">
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 h-full min-h-[440px] md:min-h-[520px] lg:min-h-[560px]">
<img alt="Workspace with code and design elements" className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-50 transition" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
<div className="relative z-10 h-full p-6 md:p-7 flex flex-col justify-end">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="sparkles"></i>
<div className="text-lg font-semibold tracking-tight text-white">In this cohort you'll</div>
</div>
<ul className="mt-4 space-y-3 text-white/80">
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="workflow"></i>
                    Design reliable agent workflows with guardrails
                  </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="link"></i>
                    Connect enterprise data and measure impact
                  </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="bot"></i>
                    Ship a Copilot Studio agent you can deploy at work
                  </li>
</ul>
<div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-4">
<div className="flex items-start gap-3 text-white/80">
<i className="h-4 w-4 mt-0.5" data-lucide="info"></i>
                    Live, practical sessions with templates and step-by-step labs.
                  </div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="relative" id="instructor">
<div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-white/15">
<span className="text-sm font-semibold tracking-tight">MP</span>
</div>
<div>
<div className="text-[17px] font-semibold tracking-tight text-white">Mayur Patil</div>
<div className="text-[13px] text-white/70">Instructor • GenAI &amp; Product</div>
</div>
<a className="ml-auto inline-flex items-center text-[14px] text-white/80 hover:text-white transition" href="https://www.linkedin.com/in/mayurpatil-aurelia/" rel="noopener" target="_blank">
<i className="mr-1.5 h-4 w-4" data-lucide="linkedin"></i>
              View LinkedIn
            </a>
</div>
<div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-4">
<div className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5 text-white/70" data-lucide="message-square"></i>
<p className="text-[15px] text-white/80">
                I built this program to help non-developers ship real agents that drive measurable business impact using Copilot Studio—without getting lost in code or hype.
              </p>
</div>
</div>
<ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[15px] text-white/80">
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="target"></i>
              Designed for managers, PMs, POs, ops &amp; CX leaders
            </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>
              No coding required — tooling-first, hands-on
            </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="briefcase"></i>
              Build an agent you can deploy at work
            </li>
</ul>
<div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-[12px] uppercase text-white/50 mb-1">Warning</div>
<div className="text-[15px] text-white/80">
              AI won’t just “assist” — it’s already replacing repetitive middle-layer work. Learn to lead AI initiatives or risk being optimized out.
            </div>
</div>
</div>
</div>
</section>

<section className="relative" id="outcomes">
<div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
<div className="flex items-center justify-between">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">What you’ll be able to do</h2>
<div className="hidden md:flex text-[13px] text-white/60">Practical skills over theory</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-white/20 transition">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="workflow"></i>
<div className="text-[15px] font-medium">Design agent workflows</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Map tasks, decisions, and guardrails for reliable outcomes.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-white/20 transition">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="link"></i>
<div className="text-[15px] font-medium">Connect to your data</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Ground agents on enterprise knowledge with connectors and retrieval.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-white/20 transition">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="bot"></i>
<div className="text-[15px] font-medium">Ship Copilot Studio agents</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Build topics, actions, and orchestrations end-to-end.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-white/20 transition">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="shield"></i>
<div className="text-[15px] font-medium">Safety &amp; governance</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Put controls, policies, and monitoring in place from day one.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-white/20 transition">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="activity"></i>
<div className="text-[15px] font-medium">Measure ROI</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Track deflection, cycle time, CSAT and business impact.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-white/20 transition">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="users"></i>
<div className="text-[15px] font-medium">Partner across functions</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Align with Legal, IT, and Ops to deploy responsibly.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="curriculum">
<div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Curriculum at a glance</h2>
<div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-lg border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="lightbulb"></i>
<div className="text-[15px] font-medium">Foundations for non-devs</div>
</div>
<p className="mt-2 text-[15px] text-white/70">LLMs, prompting, retrieval, evaluations—minus the math.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="panel-left"></i>
<div className="text-[15px] font-medium">Copilot Studio deep dive</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Topics, data, actions, connectors, environments and ALM.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="mouse-pointer-click"></i>
<div className="text-[15px] font-medium">Agents that act</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Workflows, API calls, approvals, human-in-the-loop patterns.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="scan-line"></i>
<div className="text-[15px] font-medium">Knowledge &amp; grounding</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Document pipelines, chunking, metadata, security &amp; access.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="gavel"></i>
<div className="text-[15px] font-medium">Safety, risk, compliance</div>
</div>
<p className="mt-2 text-[15px] text-white/70">PII, hallucinations, abuse, red-teaming, policy controls.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-white">
<i className="h-4.5 w-4.5" data-lucide="trophy"></i>
<div className="text-[15px] font-medium">Capstone project</div>
</div>
<p className="mt-2 text-[15px] text-white/70">Build and present a deployable agent for your function.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="schedule">
<div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="calendar"></i>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Live weekend format</h3>
</div>
<div className="text-[15px] text-white/70">Cohort starts 15 Sept 2025 • Limited seats</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-[12px] uppercase text-white/50">Cadence</div>
<div className="mt-1 text-[15px] text-white/80">Sat &amp; Sun</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-[12px] uppercase text-white/50">Duration</div>
<div className="mt-1 text-[15px] text-white/80">3 hours/day · 4 weeks</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-[12px] uppercase text-white/50">Format</div>
<div className="mt-1 text-[15px] text-white/80">Live sessions + guided project</div>
</div>
</div>
<div className="mt-5 text-[13px] text-white/60">
            Can’t attend one session? Replays are provided to enrolled learners.
          </div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="credit-card"></i>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Tuition</h3>
</div>
<div className="mt-4 flex items-end gap-3">
<div className="text-4xl font-semibold tracking-tight text-white">INR 30,000</div>
<div className="text-[14px] text-white/60">USD equivalent at checkout</div>
</div>
<ul className="mt-5 space-y-3 text-[15px] text-white/80">
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="check"></i>
                24 hours of live instruction across 4 weekends
              </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="check"></i>
                Step-by-step Copilot Studio labs and templates
              </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="check"></i>
                1 capstone agent with instructor feedback
              </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="check"></i>
                Session recordings and resources
              </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="check"></i>
                Private community + peer reviews
              </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 mt-0.5" data-lucide="check"></i>
                Live Q&amp;A and office hours
              </li>
</ul>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-[14px] text-white/80 flex items-start gap-2">
<i className="h-4 w-4 mt-0.5" data-lucide="receipt"></i>
                Corporate sponsorships accepted • GST invoice available
              </div>
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-[14px] text-white/80 flex items-start gap-2">
<i className="h-4 w-4 mt-0.5" data-lucide="calendar-check-2"></i>
                Seats are limited • Rolling acceptance
              </div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8" id="apply">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="clipboard-check"></i>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Apply now</h3>
</div>
<form action="#" className="mt-4 space-y-4" id="applyForm" method="post" novalidate="">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-[13px] text-white/60 mb-1">First name</label>
<input className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-[15px] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" name="firstName" placeholder="Your first name" required="" type="text"/>
</div>
<div>
<label className="block text-[13px] text-white/60 mb-1">Last name</label>
<input className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-[15px] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" name="lastName" placeholder="Your last name" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-[13px] text-white/60 mb-1">Work email</label>
<input className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-[15px] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-[13px] text-white/60 mb-1">Phone (optional)</label>
<input className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-[15px] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" name="phone" placeholder="+91 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-[13px] text-white/60 mb-1">Current role</label>
<select className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-[15px] text-white focus:outline-none focus:ring-2 focus:ring-white/30" name="role" required="">
<option className="text-black" value="">Select your role</option>
<option className="text-black" value="Manager">Manager</option>
<option className="text-black" value="Product Manager">Product Manager</option>
<option className="text-black" value="Product Owner">Product Owner</option>
<option className="text-black" value="Project Manager">Project Manager</option>
<option className="text-black" value="Operations">Operations</option>
<option className="text-black" value="CX/Support">CX / Support</option>
<option className="text-black" value="Other">Other (non-dev)</option>
</select>
</div>
<div>
<label className="block text-[13px] text-white/60 mb-1">What do you want to build?</label>
<textarea className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-[15px] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" name="goal" placeholder="Briefly describe your use case (e.g., support copilot, ops automation, sales assistant)" rows="3"></textarea>
</div>
<div className="flex items-start gap-2 text-[13px] text-white/60">
<i className="h-3.5 w-3.5 mt-0.5" data-lucide="info"></i>
                You’ll receive a confirmation</div></form></div></div></div></section>
    </>
  );
}
