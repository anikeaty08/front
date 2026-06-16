import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Fade-in on load for hero metrics
      document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-reveal]').forEach((el, i) => {
          el.style.opacity = 0;
          el.style.transform = 'translateY(8px)';
          setTimeout(() => {
            el.style.transition = 'opacity 600ms ease, transform 600ms ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
          }, 100 + i * 80);
        });
        // Current year
        const y = document.getElementById('y');
        if (y) y.textContent = new Date().getFullYear();
      });

      // Intersection reveal for sections
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 700ms ease, transform 700ms ease';
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      document.querySelectorAll('section').forEach((sec) => {
        sec.style.opacity = 0;
        sec.style.transform = 'translateY(10px)';
        io.observe(sec);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen">

<header className="sticky top-0 z-50 backdrop-blur-sm bg-black/40 border-b border-white/5">
<div className="mx-auto max-w-7xl px-6 py-4">
<div className="flex items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#">
<div className="text-white/90 tracking-tight font-semibold text-xl leading-none">
<span style={{letterSpacing: '-0.04em'}}>ZINK</span>
</div>
<span className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors"></span>
<span className="text-xs text-white/50">Automation Systems</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-white/70 hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="text-white/70 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-white/70 hover:text-white transition-colors" href="#about">About</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-md border border-white/10 bg-white/0 text-white/90 hover:bg-white/5 hover:border-white/20 transition-colors px-4 py-2 text-sm" href="#contact">
<span>Work with us</span>
<iconify-icon className="ml-2 text-white/70" icon="solar:arrow-right-up-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
</a>
<button aria-label="Menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 hover:bg-white/5 transition-colors p-2">
<iconify-icon className="text-white/80" icon="solar:hamburger-menu-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-12 gap-8 py-20 lg:py-28">
<div className="lg:col-span-7 flex flex-col justify-center">
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
                Operate without more headcount.
              </h1>
<p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70">
                We design and build systems that automate operations—so your team can focus on work that matters.
              </p>
<div className="mt-10 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-white text-black hover:bg-white/90 transition-colors px-5 py-3 text-sm font-medium" href="#contact">
                  Schedule a conversation
                  <iconify-icon className="ml-2" icon="solar:calendar-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/0 text-white hover:bg-white/5 hover:border-white/20 transition-colors px-5 py-3 text-sm" href="#approach">
                  See our approach
                  <iconify-icon className="ml-2 text-white/70" icon="solar:arrow-right-up-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
</a>
</div>
<div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
<div className="text-white/40 text-xs tracking-wider">NORTH</div>
<div className="text-white/40 text-xs tracking-wider">ALTA</div>
<div className="text-white/40 text-xs tracking-wider">VLD</div>
<div className="text-white/40 text-xs tracking-wider">QRT</div>
<div className="text-white/40 text-xs tracking-wider">AXN</div>
<div className="text-white/40 text-xs tracking-wider">SPC</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative h-full">
<div className="absolute -inset-x-6 -inset-y-6 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl blur-2xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-5">
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/60">Throughput</div>
<iconify-icon className="text-white/70" icon="solar:cpu-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-4 text-2xl font-semibold tracking-tight text-white">+8.2x</div>
<div className="mt-2 h-1.5 rounded-full bg-white/10">
<div className="h-1.5 rounded-full bg-white/70 w-4/5"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/60">Cycle time</div>
<iconify-icon className="text-white/70" icon="solar:clock-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-4 text-2xl font-semibold tracking-tight text-white">-53%</div>
<div className="mt-2 h-1.5 rounded-full bg-white/10">
<div className="h-1.5 rounded-full bg-white/70 w-3/5"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/60">Accuracy</div>
<iconify-icon className="text-white/70" icon="solar:shield-check-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-4 text-2xl font-semibold tracking-tight text-white">99.9%</div>
<div className="mt-2 h-1.5 rounded-full bg-white/10">
<div className="h-1.5 rounded-full bg-white/70 w-11/12"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/60">New hires</div>
<iconify-icon className="text-white/70" icon="solar:user-minus-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-4 text-2xl font-semibold tracking-tight text-white">0</div>
<div className="mt-2 h-1.5 rounded-full bg-white/10">
<div className="h-1.5 rounded-full bg-white/70 w-2/3"></div>
</div>
</div>
</div>
<div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-3 text-white/80">
<iconify-icon icon="solar:route-square-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm">Hands-off workflows across tools and teams</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/70">Intake</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/70">Checks</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/70">Notify</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/70">Enrich</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/70">Decide</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/70">Log</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="approach">
<div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/80" icon="solar:robot-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white">Automation that ships</h3>
</div>
<p className="mt-4 text-sm text-white/70">
                Pragmatic systems that run every day—no demos, just dependable throughput.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/80" icon="solar:chart-2-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white">Throughput without burnout</h3>
</div>
<p className="mt-4 text-sm text-white/70">
                Move volume without adding people. Clear SLAs, predictable latency.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/80" icon="solar:widget-6-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white">Clarity by design</h3>
</div>
<p className="mt-4 text-sm text-white/70">
                One place to see what’s running, what’s queued, and what needs attention.
              </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="capabilities">
<div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white">What we build</h2>
<p className="mt-4 text-base text-white/70">Foundation first. Then speed. We integrate, orchestrate, and harden the path from intake to done.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/80">Workflow automation</div>
<iconify-icon className="text-white/70" icon="solar:route-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-3 text-sm text-white/70">Event-driven flows, retries, queues, and audit trails that don’t fall over.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/80">AI agents</div>
<iconify-icon className="text-white/70" icon="solar:infinity-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-3 text-sm text-white/70">Structured agents for classification, enrichment, and decision support.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/80">System integration</div>
<iconify-icon className="text-white/70" icon="solar:server-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-3 text-sm text-white/70">APIs, webhooks, and data pipelines that keep tools in lockstep.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/80">Internal tools</div>
<iconify-icon className="text-white/70" icon="solar:settings-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-3 text-sm text-white/70">Operator surfaces for review, override, and observability.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="process">
<div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white">How we work</h2>
<p className="mt-4 text-base text-white/70">Short loops. Real outcomes. We ship production systems in weeks, then iterate with data.</p>
</div>
<div className="mt-10 grid md:grid-cols-4 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-xs text-white/80">1</span>
<div className="text-sm font-medium text-white/80">Map</div>
</div>
<p className="mt-3 text-sm text-white/70">Trace value paths, codify rules, define SLAs and failure modes.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-xs text-white/80">2</span>
<div className="text-sm font-medium text-white/80">Design</div>
</div>
<p className="mt-3 text-sm text-white/70">Interfaces, queues, storage, observability—designed for scale.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-xs text-white/80">3</span>
<div className="text-sm font-medium text-white/80">Build</div>
</div>
<p className="mt-3 text-sm text-white/70">Ship a vertical slice. Measure latency, accuracy, and failure rates.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-xs text-white/80">4</span>
<div className="text-sm font-medium text-white/80">Run</div>
</div>
<p className="mt-3 text-sm text-white/70">Own uptime, alerts, and continuous improvement. Quiet reliability.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="work">
<div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
<div className="grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white">Outcomes</h2>
<p className="mt-4 text-base text-white/70">A few snapshots from recent systems. Different industries, same pattern: less manual work, more flow.</p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="text-xs text-white/60">Ops cycle time</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">-57%</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="text-xs text-white/60">Throughput</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">+6.9x</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="text-xs text-white/60">Manual touches</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">-83%</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="text-xs text-white/60">New hires</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">0</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/80">Case study — Fintech ops</div>
<a className="text-xs text-white/60 hover:text-white/80 transition-colors inline-flex items-center" href="#">Read summary
                    <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
</a>
</div>
<p className="mt-4 text-sm text-white/70">
                  Built an automated onboarding and reconciliation system across payments, KYC, and ledger services.
                  Reduced exception handling by 78% and cleared backlogs without hiring.
                </p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-2 text-white/80 text-sm">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<span>Audit-ready logs</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-2 text-white/80 text-sm">
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<span>Deterministic routing</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-2 text-white/80 text-sm">
<iconify-icon icon="solar:route-square-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
<span>Retries &amp; backoff</span>
</div>
</div>
</div>
<div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5">
<div className="flex items-center justify-between">
<div className="text-xs text-white/60">Live flow (sample)</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-md border border-white/10 bg-white/0 hover:bg-white/5 transition-colors px-3 py-1.5 text-xs text-white/80">
<iconify-icon className="mr-1" icon="solar:play-linear" style={{fontSize: '1rem'}}></iconify-icon>
                        Replay
                      </button>
<button className="inline-flex items-center rounded-md border border-white/10 bg-white/0 hover:bg-white/5 transition-colors px-3 py-1.5 text-xs text-white/80">
<iconify-icon className="mr-1" icon="solar:magic-stick-3-linear" style={{fontSize: '1rem'}}></iconify-icon>
                        Simulate
                      </button>
</div>
</div>
<div className="mt-4 grid grid-cols-6 gap-2">
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-center text-xs text-white/70">Intake</div>
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-center text-xs text-white/70">Validate</div>
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-center text-xs text-white/70">Enrich</div>
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-center text-xs text-white/70">Decide</div>
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-center text-xs text-white/70">Post</div>
<div className="rounded-md border border-white/10 bg-black/30 p-3 text-center text-xs text-white/70">Notify</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5">
<div className="mx-auto max-w-5xl px-6 py-20 lg:py-24">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
<div className="text-white text-xl font-semibold tracking-tight">“Calm, precise, and reliable. They shipped a system that quietly runs the business.”</div>
<div className="mt-3 text-xs text-white/60">VP Operations, Enterprise SaaS</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="contact">
<div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white text-center">Let’s make your ops run themselves</h2>
<p className="mt-4 text-base text-white/70 text-center">Tell us about your volume, failure modes, and SLAs. We’ll share a plan.</p>
<form className="mt-10 grid sm:grid-cols-3 gap-3">
<input className="sm:col-span-2 w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/20 focus:ring-0" placeholder="Work email" required="" type="email"/>
<button className="w-full inline-flex items-center justify-center rounded-md bg-white text-black hover:bg-white/90 transition-colors px-4 py-3 text-sm font-medium" type="submit">
              Send
              <iconify-icon className="ml-2" icon="solar:arrow-right-up-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
</button>
</form>
<div className="mt-6 text-center text-xs text-white/50">Or email us: hello@sable.systems</div>
</div>
</section>

<footer className="border-t border-white/5" id="about">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="inline-flex items-center gap-3">
<div className="text-white/90 tracking-tight font-semibold text-lg leading-none">
<span style={{letterSpacing: '-0.04em'}}>ZINK</span>
</div>
<span className="h-1 w-1 rounded-full bg-white/15"></span>
<span className="text-xs text-white/50">Operate without more headcount.</span>
</div>
<div className="flex items-center gap-6 text-xs">
<a className="text-white/60 hover:text-white/80 transition-colors" href="#work">Work</a>
<a className="text-white/60 hover:text-white/80 transition-colors" href="#capabilities">Capabilities</a>
<a className="text-white/60 hover:text-white/80 transition-colors" href="#process">Process</a>
<a className="text-white/60 hover:text-white/80 transition-colors" href="#contact">Contact</a>
</div>
</div>
<div className="mt-6 text-xs text-white/40">© <span id="y">2026</span> Sable Systems LLC. All rights reserved.</div>
</div>
</footer>
</div>



    </>
  );
}
