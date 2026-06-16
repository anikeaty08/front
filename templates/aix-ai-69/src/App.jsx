import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Scroll progress
      const progress = document.getElementById('scroll-progress');
      const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const width = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        progress.style.width = width + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // Reveal on scroll
      const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
      // Initialize hidden state (Tailwind classes already present for first paint)
      const io = new IntersectionObserver((entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
            el.style.transitionDelay = delay + 'ms';
            el.classList.remove('opacity-0', 'translate-y-6');
            el.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(el);
          }
        }
      }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
      revealEls.forEach(el => io.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 h-[2px] bg-white/70 z-50 w-0 transition-[width] duration-150 ease-linear" id="scroll-progress"></div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-x-0 top-[-30%] mx-auto h-[60vh] max-w-5xl blur-3xl opacity-30" style={{background: 'radial-gradient(40% 40% at 50% 40%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 60%), radial-gradient(30% 30% at 60% 60%, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 60%)'}}></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'center'}}></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/5 flex items-center justify-center text-[11px] tracking-tight font-semibold text-white group-hover:bg-white/10 group-hover:border-white/25 transition-colors">AX</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors tracking-tight">AIX</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-white hover:bg-white/10 hover:border-white/25 transition-colors" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
            Book a call
          </a>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-16">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 mb-5">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
            Custom AI, from prototype to production
          </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
<span className="block opacity-0 translate-y-6 transition-all duration-700 ease-out" data-reveal="">AI, engineered</span>
<span className="block opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="120" data-reveal="">to scale your</span>
<span className="block opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="240" data-reveal="">
              operations<span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(90deg, #A78BFA 0%, #22D3EE 30%, #34D399 60%, #FDE68A 100%)'}}>.</span>
</span>
</h1>
<p className="max-w-2xl mt-5 text-base md:text-lg text-neutral-300 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="360" data-reveal="">
            We partner with startups and enterprises to build reliable, compliant AI systems—chat, agents, vision, and automation—integrated with your stack and measured by outcomes.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="480" data-reveal="">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 active:bg-neutral-200 transition-colors outline outline-1 outline-white/10" href="#contact">
              Start a project
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10 hover:border-white/25 transition-colors" href="#work">
              View work
              <i className="h-4 w-4" data-lucide="film"></i>
</a>
</div>
<div className="mt-10 grid grid-cols-3 gap-6 max-w-xl opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="600" data-reveal="">
<div className="rounded-md border border-white/10 bg-white/5 p-4">
<div className="text-xs text-neutral-400">Uptime</div>
<div className="mt-1 text-lg font-medium text-white tracking-tight">99.95%</div>
</div>
<div className="rounded-md border border-white/10 bg-white/5 p-4">
<div className="text-xs text-neutral-400">Avg. ROI</div>
<div className="mt-1 text-lg font-medium text-white tracking-tight">10×</div>
</div>
<div className="rounded-md border border-white/10 bg-white/5 p-4">
<div className="text-xs text-neutral-400">Compliance</div>
<div className="mt-1 flex items-center gap-1.5 text-lg font-medium text-white tracking-tight">
<i className="h-5 w-5" data-lucide="shield-check"></i> SOC 2
              </div>
</div>
</div>
</div>

<div className="mt-16 md:mt-20 border-t border-white/10 pt-6">
<div className="text-xs text-neutral-400">Trusted by teams at</div>
<div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-4">
<div className="h-10 rounded-md border border-white/10 bg-white/[0.04] flex items-center justify-center text-neutral-300 tracking-tight">KY</div>
<div className="h-10 rounded-md border border-white/10 bg-white/[0.04] flex items-center justify-center text-neutral-300 tracking-tight">PL</div>
<div className="h-10 rounded-md border border-white/10 bg-white/[0.04] flex items-center justify-center text-neutral-300 tracking-tight">NV</div>
<div className="h-10 rounded-md border border-white/10 bg-white/[0.04] flex items-center justify-center text-neutral-300 tracking-tight">UM</div>
<div className="h-10 rounded-md border border-white/10 bg-white/[0.04] flex items-center justify-center text-neutral-300 tracking-tight">RX</div>
<div className="h-10 rounded-md border border-white/10 bg-white/[0.04] flex items-center justify-center text-neutral-300 tracking-tight">OT</div>
</div>
</div>
</div>
</section>

<section className="relative" id="capabilities">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white opacity-0 translate-y-6 transition-all duration-700 ease-out" data-reveal="">
            Capabilities that meet production standards
          </h2>
<p className="mt-4 text-neutral-300 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="120" data-reveal="">
            From greenfield prototypes to enterprise rollouts—built with observability, cost controls, and human-in-the-loop where it matters.
          </p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-5">
<div className="group rounded-xl border border-white/10 bg-white/[0.035] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out hover:bg-white/[0.05] hover:border-white/20" data-reveal="">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5" data-lucide="bot"></i>
<div className="text-base font-medium tracking-tight">Agents &amp; Workflows</div>
</div>
<p className="mt-3 text-sm text-neutral-300">
              Task-specific agents with tool use, retrieval, and guardrails. Triggered via API, queue, or Slack.
            </p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="plug"></i> Tools: DB, APIs, files, ERP</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="check-circle"></i> HITL review queues</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="gauge"></i> SLAs and rate-limits</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.035] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out hover:bg-white/[0.05] hover:border-white/20" data-delay="80" data-reveal="">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5" data-lucide="image"></i>
<div className="text-base font-medium tracking-tight">Multimodal &amp; Vision</div>
</div>
<p className="mt-3 text-sm text-neutral-300">
              OCR, inspection, and document understanding with structured outputs and lineage.
            </p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="file-text"></i> PDF + forms extraction</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="box"></i> Batch pipelines</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="goal"></i> Model evals &amp; drift</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.035] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out hover:bg-white/[0.05] hover:border-white/20" data-delay="160" data-reveal="">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5" data-lucide="shield"></i>
<div className="text-base font-medium tracking-tight">Safety &amp; Compliance</div>
</div>
<p className="mt-3 text-sm text-neutral-300">
              PII handling, red-teaming, and audit logs. BAA-ready deployments with region control.
            </p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="scan-line"></i> Content filters / policy</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="lock"></i> Key &amp; secret hygiene</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="clipboard-list"></i> SOC 2, ISO 27001</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="work">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white opacity-0 translate-y-6 transition-all duration-700 ease-out" data-reveal="">
            Selected work
          </h2>
<p className="mt-4 text-neutral-300 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="120" data-reveal="">
            Outcomes over demos. Here are a few recent engagements.
          </p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-5">

<article className="group rounded-xl border border-white/10 bg-white/[0.035] overflow-hidden opacity-0 translate-y-6 transition-all duration-700 ease-out hover:border-white/20" data-reveal="">
<div className="h-36 w-full bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&amp'}}></div>
<div className="p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/5 flex items-center justify-center text-[11px] text-white tracking-tight font-semibold">RX</div>
<span className="text-sm text-neutral-300">Healthcare</span>
</div>
<span className="text-xs text-emerald-300/90">-62% handling time</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Claims assistant with HITL</h3>
<p className="mt-2 text-sm text-neutral-300">
                Intake triage, document extraction, and drafts for adjusters with verification queues.
              </p>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4" data-lucide="move-right"></i> RAG, tools, audit trail
              </div>
</div>
</article>

<article className="group rounded-xl border border-white/10 bg-white/[0.035] overflow-hidden opacity-0 translate-y-6 transition-all duration-700 ease-out hover:border-white/20" data-delay="80" data-reveal="">
<div className="h-36 w-full bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp'}}></div>
<div className="p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/5 flex items-center justify-center text-[11px] text-white tracking-tight font-semibold">NV</div>
<span className="text-sm text-neutral-300">Manufacturing</span>
</div>
<span className="text-xs text-emerald-300/90">+18% throughput</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Visual QA for assembly lines</h3>
<p className="mt-2 text-sm text-neutral-300">
                Real-time defect detection with edge devices synced to a central inference gateway.
              </p>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4" data-lucide="factory"></i> Vision, streaming, alerts
              </div>
</div>
</article>

<article className="group rounded-xl border border-white/10 bg-white/[0.035] overflow-hidden opacity-0 translate-y-6 transition-all duration-700 ease-out hover:border-white/20" data-delay="160" data-reveal="">
<div className="h-36 w-full bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp'}}></div>
<div className="p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/5 flex items-center justify-center text-[11px] text-white tracking-tight font-semibold">PL</div>
<span className="text-sm text-neutral-300">SaaS</span>
</div>
<span className="text-xs text-emerald-300/90">-37% churn</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">In-product copilot</h3>
<p className="mt-2 text-sm text-neutral-300">
                Contextual support and automation across the app with analytics and sandboxed tools.
              </p>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4" data-lucide="line-chart"></i> In-app chat, evals, cost caps
              </div>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="process">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white opacity-0 translate-y-6 transition-all duration-700 ease-out" data-reveal="">
            A focused delivery model
          </h2>
<p className="mt-4 text-neutral-300 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="120" data-reveal="">
            Short cycles, measurable deltas, production-first discipline.
          </p>
</div>
<ol className="mt-10 grid md:grid-cols-4 gap-5">
<li className="rounded-xl border border-white/10 bg-white/[0.035] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-reveal="">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5" data-lucide="target"></i>
<div className="text-base font-medium tracking-tight">1. Define</div>
</div>
<p className="mt-3 text-sm text-neutral-300">Jobs-to-be-done, constraints, metrics, data audit.</p>
</li>
<li className="rounded-xl border border-white/10 bg-white/[0.035] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="80" data-reveal="">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5" data-lucide="beaker"></i>
<div className="text-base font-medium tracking-tight">2. Prototype</div>
</div>
<p className="mt-3 text-sm text-neutral-300">Thin slice MVP, eval harness, stakeholder loops.</p>
</li>
<li className="rounded-xl border border-white/10 bg-white/[0.035] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="160" data-reveal="">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5" data-lucide="ship"></i>
<div className="text-base font-medium tracking-tight">3. Ship</div>
</div>
<p className="mt-3 text-sm text-neutral-300">Harden, observe, cost controls, access &amp; safety.</p>
</li>
<li className="rounded-xl border border-white/10 bg-white/[0.035] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="240" data-reveal="">
<div className="flex items-center gap-2 text-white">
<i className="h-5 w-5" data-lucide="repeat"></i>
<div className="text-base font-medium tracking-tight">4. Iterate</div>
</div>
<p className="mt-3 text-sm text-neutral-300">A/B learnings, data flywheel, roadmap handover.</p>
</li>
</ol>
</div>
</section>

<section className="relative border-t border-white/10" id="contact">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-8 md:p-10">
<div className="grid md:grid-cols-3 gap-8 md:items-center">
<div className="md:col-span-2">
<h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white opacity-0 translate-y-6 transition-all duration-700 ease-out" data-reveal="">
                Let’s build your AI advantage
              </h3>
<p className="mt-3 text-neutral-300 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="120" data-reveal="">
                Tell us about your goals. We’ll respond within one business day.
              </p>
<form className="mt-6 flex flex-col sm:flex-row gap-3 opacity-0 translate-y-6 transition-all duration-700 ease-out" data-delay="240" data-reveal="">
<input className="w-full sm:max-w-sm rounded-md border border-white/15 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30" placeholder="you@company.com" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 active:bg-neutral-200 transition-colors" type="submit">
                  Request intro
                  <i className="h-4 w-4" data-lucide="send"></i>
</button>
</form>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-300" data-lucide="clock"></i>
<span className="text-sm text-neutral-300">Mon–Fri, 9–6 PT</span>
</div>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-300" data-lucide="globe"></i>
<span className="text-sm text-neutral-300">Remote • Global</span>
</div>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-300" data-lucide="mail"></i>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="mailto:hello@aix.studio">hello@aix.studio</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/5 flex items-center justify-center text-[11px] text-white tracking-tight font-semibold">AX</div>
<span className="text-sm text-neutral-400">AIX © <span id="year"></span></span>
</div>
<div className="flex items-center gap-5 text-sm">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Security</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
</footer>




    </>
  );
}
