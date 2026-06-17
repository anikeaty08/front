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



/* Intersection Observer for Animations */
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 mx-auto max-w-7xl grid-lines border-r border-l border-white/[0.02]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-40 blur-3xl"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0s_both]">
<nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/5 bg-[#050505]/80 p-2 pl-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">
            Trace0
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#models">Models</a>
</div>
<div className="flex items-center gap-3">
<a className="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-800" href="mailto:contact@trace0.io" style={{'--border-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))', '--border-radius-before': '9999px'}}>
<span>Schedule Call</span>
<iconify-icon className="opacity-50 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</nav>
</div>

<main className="max-w-7xl z-10 mr-auto ml-auto pt-12 pr-6 pb-24 pl-6 relative">

<div className="mx-auto mb-24 max-w-4xl text-center">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.1s_both] mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
          FUZZ · TRACE · EXPLOIT · REMEDIATE
        </div>
<h1 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-6xl font-medium leading-[0.95] tracking-tight text-white md:text-8xl">
          Trace threats
          <br/>
<span className="text-neutral-500">to their origin.</span>
</h1>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-neutral-400 tracking-tight">
          Trace0 is a next-generation cybersecurity advisory built around deep offensive expertise. We specialize in vulnerability research, adversarial security assessments, and strategic cyber risk advisory.
        </p>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors" href="mailto:contact@trace0.io">
            Schedule a Call
          </a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-[#0F0F0F] px-8 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/20 transition-all shadow-inner" href="#services">
            Explore Capabilities
          </a>
</div>
</div>

<div className="relative pt-12" id="about">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
            Elite advisory for organizations under threat
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] text-lg font-light leading-relaxed text-neutral-400">
            We don't just find problems — we trace them to their origin, understand their blast radius, and help organizations build durable defenses.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 transition-colors hover:border-white/10">
<div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-white">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-medium text-white tracking-tight">
              Offensive Mindset
            </h3>
<p className="text-sm leading-relaxed text-neutral-400">
              We approach security the way attackers do — finding gaps before they're exploited by active adversaries.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 transition-colors hover:border-white/10">
<div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-white">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-medium text-white tracking-tight">
              Research-Led
            </h3>
<p className="text-sm leading-relaxed text-neutral-400">
              Deep vulnerability research drives every engagement. We don't rely on checklists or automated scans.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] group relative overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 transition-colors hover:border-white/10">
<div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-white">
<iconify-icon icon="solar:map-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-medium text-white tracking-tight">
              Strategic Clarity
            </h3>
<p className="text-sm leading-relaxed text-neutral-400">
              Every finding is translated into actionable risk remediation guidance tailored to your architecture.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] group relative overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 transition-colors hover:border-white/10">
<div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-white">
<iconify-icon icon="solar:screencast-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-medium text-white tracking-tight">
              Precision Execution
            </h3>
<p className="text-sm leading-relaxed text-neutral-400">
              Scoped, contained, and documented engagements with zero collateral impact on production systems.
            </p>
</div>
</div>
</div>
</main>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.8s_both] border-y border-white/5 bg-[#030303]">
<div className="mx-auto max-w-7xl px-6 py-16 text-center">
<p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
          Organizations we protect
        </p>
<div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:gap-20">
<iconify-icon className="text-white" icon="simple-icons:github" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:cloudflare" width="30"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:auth0" width="26"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:datadog" width="28"></iconify-icon>
</div>
</div>
</div>

<section className="relative overflow-hidden bg-[#050505] py-32" id="services">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,20,20,1),_rgba(5,5,5,0))]"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both]">
<h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
              Scope of Advisory
              <br/>
              Services
            </h2>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] flex items-end">
<p className="text-lg font-light leading-relaxed text-neutral-400">
              From exploit development to board-level risk briefings — our capabilities span the full threat lifecycle.
            </p>
</div>
</div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-neutral-600">01</span>
<iconify-icon className="text-neutral-500" icon="solar:bug-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium text-white tracking-tight">
              Vulnerability Research
            </h3>
<p className="mb-8 text-sm leading-relaxed text-neutral-400">
              Deep-dive research into target systems, protocols, and software to uncover novel vulnerabilities before adversaries do.
            </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">0-Day</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">CVE</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Bug Bounty</span>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-neutral-600">02</span>
<iconify-icon className="text-neutral-500" icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium text-white tracking-tight">
              Red Team Operations
            </h3>
<p className="mb-8 text-sm leading-relaxed text-neutral-400">
              Full-scope adversarial simulation targeting people, process, and technology to test real-world detection and response.
            </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">APT Simulation</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Social Eng</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Persistence</span>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-neutral-600">03</span>
<iconify-icon className="text-neutral-500" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium text-white tracking-tight">
              Penetration Testing
            </h3>
<p className="mb-8 text-sm leading-relaxed text-neutral-400">
              Targeted, scoped assessments across web, mobile, network, and cloud environments with actionable remediation.
            </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Web</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Mobile</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Cloud</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Network</span>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-neutral-600">04</span>
<iconify-icon className="text-neutral-500" icon="solar:routing-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium text-white tracking-tight">
              Threat Modeling
            </h3>
<p className="mb-8 text-sm leading-relaxed text-neutral-400">
              Systematic identification of threat vectors and attack surfaces before code ships or architecture is finalized.
            </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">STRIDE</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">PASTA</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Architecture</span>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-neutral-600">05</span>
<iconify-icon className="text-neutral-500" icon="solar:alarm-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium text-white tracking-tight">
              Incident Response
            </h3>
<p className="mb-8 text-sm leading-relaxed text-neutral-400">
              Rapid forensic investigation, containment, and remediation advisory when breaches or active intrusions occur.
            </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Forensics</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Containment</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Recovery</span>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-neutral-600">06</span>
<iconify-icon className="text-neutral-500" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium text-white tracking-tight">
              Security Advisory
            </h3>
<p className="mb-8 text-sm leading-relaxed text-neutral-400">
              Strategic cyber risk guidance for boards, CISOs, and engineering leaders navigating complex threat landscapes.
            </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">CISO</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Risk</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-neutral-300">Strategy</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#020202] py-32 relative">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-20 text-center max-w-2xl mx-auto">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
            Deliverables &amp; Artifacts
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] text-lg font-light leading-relaxed text-neutral-400">
            Every engagement concludes with comprehensive documentation designed for both technical teams and leadership.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex gap-5">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0C0C0C] text-xl text-cyan-400 shadow-xl font-mono">
              ▤
            </div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Technical Report</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Full exploit chain documentation with CVSS scoring, PoC code, and remediation guidance.</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] flex gap-5">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0C0C0C] text-xl text-cyan-400 shadow-xl font-mono">
              ▣
            </div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Executive Brief</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Board-ready risk summary translating technical findings into business impact language.</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] flex gap-5">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0C0C0C] text-xl text-cyan-400 shadow-xl font-mono">
              ▧
            </div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Attack Timeline</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Step-by-step reconstruction of simulated attack paths with detection opportunities mapped.</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex gap-5">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0C0C0C] text-xl text-cyan-400 shadow-xl font-mono">
              ▦
            </div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Remediation Roadmap</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Prioritized fix plan with effort estimates, quick wins, and long-term hardening strategies.</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] flex gap-5">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0C0C0C] text-xl text-cyan-400 shadow-xl font-mono">
              ▩
            </div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Retest Validation</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Post-remediation verification that all critical findings have been properly addressed.</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] flex gap-5">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0C0C0C] text-xl text-cyan-400 shadow-xl font-mono">
              ◫
            </div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Threat Model Artifact</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Living document capturing attack surfaces, trust boundaries, and mitigations for ongoing use.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-[#030303] py-32 overflow-hidden" id="process">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.02),_transparent_60%)]"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mb-20 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-medium tracking-tight text-white md:text-5xl">
            Engagement Process
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mt-4 text-neutral-400 font-light max-w-2xl mx-auto">
            A methodical, structured approach to discovering and mitigating risk.
          </p>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] relative rounded-3xl border border-white/5 bg-[#0A0A0A] p-8 md:p-12 shadow-2xl">

<div className="absolute top-[30%] md:top-1/2 left-0 w-full -translate-y-1/2 px-12 md:px-24 hidden lg:block pointer-events-none z-0">
<div className="relative h-px w-full bg-white/5">
<div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" style={{animation: 'schemaFlow 4s linear infinite'}}></div>
<div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" style={{animation: 'schemaFlow 4s linear infinite 2s'}}></div>
</div>
</div>
<div className="grid grid-cols-1 gap-12 lg:grid-cols-4 relative z-10">

<div className="group flex flex-col items-center text-center">
<div className="relative mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/30">
<div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<iconify-icon className="text-neutral-400 transition-colors group-hover:text-white" icon="solar:pen-new-square-linear" width="28"></iconify-icon>
<div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#111] text-[10px] font-mono text-neutral-400">
                  01
                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                Scoping
              </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                Define objectives, rules of engagement, and success criteria for the assessment.
              </p>
</div>

<div className="group flex flex-col items-center text-center relative">
<div className="relative mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/30">
<div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<iconify-icon className="text-neutral-400 transition-colors group-hover:text-white" icon="solar:radar-linear" width="28"></iconify-icon>
<div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#111] text-[10px] font-mono text-neutral-400">
                  02
                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                Reconnaissance
              </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                Passive and active intelligence gathering on the target environment and surface.
              </p>
</div>

<div className="group flex flex-col items-center text-center relative">
<div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative mb-6 flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full border border-cyan-500/20 bg-[#0F0F0F] shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-transform duration-500 group-hover:scale-110 z-10">
<iconify-icon className="text-cyan-400" icon="solar:code-square-linear" width="32"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-500/20 bg-[#111] text-[10px] font-mono text-cyan-400">
                  03
                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                Exploitation
              </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                Controlled adversarial activity and vulnerability exploitation within agreed boundaries.
              </p>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/30">
<div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<iconify-icon className="text-neutral-400 transition-colors group-hover:text-white" icon="solar:document-linear" width="28"></iconify-icon>
<div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#111] text-[10px] font-mono text-neutral-400">
                  04
                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                Reporting
              </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                Findings documented with full technical detail, business impact, and remediation guidance.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#050505] py-32" id="models">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-20 text-center max-w-2xl mx-auto">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-medium tracking-tight text-white mb-4">
            Engagement Models
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] text-neutral-400 font-light">
            Flexible structures tailored to your immediate needs and long-term security roadmap.
          </p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col rounded-3xl border border-white/5 bg-transparent p-8 hover:border-white/10 transition-colors">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/5 p-2 text-white w-10 h-10">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<div className="mb-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Fixed Scope
            </div>
<div className="mb-4 text-2xl font-medium text-white tracking-tight">
              Project-Based
            </div>
<p className="mb-8 flex-1 text-sm text-neutral-400 leading-relaxed">
              Defined scope, timeline, and deliverables. Ideal for penetration tests and point-in-time assessments.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] relative flex flex-col rounded-3xl border border-white/10 bg-[#0C0C0C] p-8 shadow-2xl transition-colors hover:border-white/20">
<div className="absolute -top-3 left-8 inline-block rounded-full border border-white/10 bg-[#0F0F0F] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
              Recommended
            </div>
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/10 p-2 text-white w-10 h-10">
<iconify-icon icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<div className="mb-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Monthly
            </div>
<div className="mb-4 text-2xl font-medium text-white tracking-tight">
              Retainer
            </div>
<p className="mb-8 flex-1 text-sm text-neutral-300 leading-relaxed">
              Ongoing advisory, research access, and priority response capacity for continuously evolving environments.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] flex flex-col rounded-3xl border border-white/5 bg-transparent p-8 hover:border-white/10 transition-colors">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/5 p-2 text-white w-10 h-10">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div className="mb-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Custom
            </div>
<div className="mb-4 text-2xl font-medium text-white tracking-tight">
              Embedded Research
            </div>
<p className="mb-8 flex-1 text-sm text-neutral-400 leading-relaxed">
              Trace0 researchers embedded in your team for deep, sustained vulnerability research and architecture guidance.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] flex flex-col rounded-3xl border border-white/5 bg-transparent p-8 hover:border-white/10 transition-colors">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/5 p-2 text-white w-10 h-10">
<iconify-icon icon="solar:siren-rounded-linear" width="20"></iconify-icon>
</div>
<div className="mb-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              On-Demand
            </div>
<div className="mb-4 text-2xl font-medium text-white tracking-tight">
              Incident Response
            </div>
<p className="mb-8 flex-1 text-sm text-neutral-400 leading-relaxed">
              Rapid deployment for active incidents requiring immediate forensic investigation, containment, and recovery.
            </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#020202] py-40">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-4xl font-medium tracking-tight text-white md:text-5xl">
          Ready to discuss your<br/>security needs?
        </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mb-10 text-xl font-light leading-relaxed text-neutral-400">
          Cybersecurity demands foresight.<br/>Let's build yours.
        </p>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] mb-12 text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed">
          Whether you're assessing risk, responding to an incident, or building a long-term security program — Trace0 is ready to engage.
        </p>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both]">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-10 text-sm font-semibold text-black hover:bg-neutral-200 transition-transform hover:scale-[1.02]" href="mailto:contact@trace0.io">
            Schedule a Call
          </a>
<div className="mt-6 text-sm font-mono text-neutral-600">
            contact@trace0.io
          </div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pb-12 pt-16">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white">
                Trace0
              </span>
</div>
<p className="text-xs leading-relaxed text-neutral-500">
              Elite cybersecurity advisory focusing on deep vulnerability research, adversarial assessments, and strategic risk guidance.
            </p>
</div>
<div className="flex gap-16 text-xs text-neutral-500">
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Services</span>
<a className="hover:text-white transition-colors" href="#">Vulnerability Research</a>
<a className="hover:text-white transition-colors" href="#">Red Team Operations</a>
<a className="hover:text-white transition-colors" href="#">Penetration Testing</a>
<a className="hover:text-white transition-colors" href="#">Incident Response</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Company</span>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Legal &amp; Privacy</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Contact</span>
<a className="hover:text-white transition-colors" href="mailto:contact@trace0.io">contact@trace0.io</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-8">
<p className="text-[10px] text-neutral-600">
            © 2024 Trace0 Security Advisory. All rights reserved.
          </p>
</div>
</div>
</footer>

    </>
  );
}
