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



    document.getElementById('year').textContent = new Date().getFullYear();

    const {
      createIcons,
      ArrowUpRight,
      ArrowRight,
      Calendar,
      Play,
      Shield,
      Sparkles,
      TrendingUp,
      Layers,
      SlidersHorizontal,
      CheckCircle2,
      FileText,
      Send,
      Lock,
      Globe2,
      Linkedin,
      Mail,
      Bot,
      Scales,
      Compass,
      ChevronRight
    } = lucide;

    createIcons({
      icons: {
        ArrowUpRight,
        ArrowRight,
        Calendar,
        Play,
        Shield,
        Sparkles,
        TrendingUp,
        Layers,
        SlidersHorizontal,
        CheckCircle2,
        FileText,
        Send,
        Lock,
        Globe2,
        Linkedin,
        Mail,
        Bot,
        Scales,
        Compass,
        ChevronRight
      },
      attrs: { width: '100%', height: '100%', strokeWidth: 1.5 }
    });

    document.getElementById('icon-arrow').setAttribute('data-lucide', 'arrow-up-right');
    document.getElementById('icon-calendar').setAttribute('data-lucide', 'calendar');
    document.getElementById('icon-play').setAttribute('data-lucide', 'play');
    document.getElementById('icon-sparkles').setAttribute('data-lucide', 'sparkles');
    document.getElementById('icon-trending-up').setAttribute('data-lucide', 'trending-up');
    document.getElementById('icon-shield').setAttribute('data-lucide', 'shield');
    document.getElementById('icon-arrow-right').setAttribute('data-lucide', 'arrow-right');
    document.getElementById('icon-layers').setAttribute('data-lucide', 'layers');
    document.getElementById('icon-sliders').setAttribute('data-lucide', 'sliders-horizontal');
    document.getElementById('icon-check-circle').setAttribute('data-lucide', 'check-circle-2');
    document.getElementById('icon-sparkles-2').setAttribute('data-lucide', 'sparkles');
    document.getElementById('icon-calendar-2').setAttribute('data-lucide', 'calendar');
    document.getElementById('icon-file-text').setAttribute('data-lucide', 'file-text');
    document.getElementById('icon-send').setAttribute('data-lucide', 'send');
    document.getElementById('icon-lock').setAttribute('data-lucide', 'lock');
    document.getElementById('icon-globe').setAttribute('data-lucide', 'globe-2');
    document.getElementById('icon-linkedin').setAttribute('data-lucide', 'linkedin');
    document.getElementById('icon-mail').setAttribute('data-lucide', 'mail');
    document.getElementById('icon-compass').setAttribute('data-lucide', 'compass');
    document.getElementById('icon-bot').setAttribute('data-lucide', 'bot');
    document.getElementById('icon-balance').setAttribute('data-lucide', 'scales');
    document.getElementById('icon-chevron').setAttribute('data-lucide', 'chevron-right');
    document.getElementById('icon-chevron-2').setAttribute('data-lucide', 'chevron-right');
    document.getElementById('icon-chevron-3').setAttribute('data-lucide', 'chevron-right');
    document.getElementById('icon-arrow-right-2').setAttribute('data-lucide', 'arrow-right');
    document.getElementById('icon-arrow-right-3').setAttribute('data-lucide', 'arrow-right');
    document.getElementById('icon-arrow-right-4').setAttribute('data-lucide', 'arrow-right');
    document.getElementById('icon-arrow-right-5').setAttribute('data-lucide', 'arrow-right');

    createIcons();

    // Simple 3D tilt effect for hero card
    const heroCard = document.getElementById('hero-card');
    if (heroCard) {
      heroCard.addEventListener('pointermove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      });

      heroCard.addEventListener('pointerleave', () => {
        heroCard.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
      });
    }
  
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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="border-b border-slate-800/70 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 via-cyan-300 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
<span className="text-sm font-semibold tracking-tight text-slate-950">NA</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-50">NovaAI</span>
<span className="text-xs text-slate-400">Intelligent Consulting</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#services">Services</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#industries">Industries</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#process">Approach</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#insights">Insights</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-900 transition">
<span>Client portal</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 px-4 sm:px-5 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition">
<span>Book a strategy call</span>
<span className="h-4 w-4" id="icon-arrow"></span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<section className="border-b border-slate-800/70">
<div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
<span className="h-3 w-3 rounded-full bg-gradient-to-r from-sky-400 to-violet-500"></span>
<span>Applied AI for decisive businesses</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                Design, deploy, and trust AI that moves your business forward.
              </h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                NovaAI partners with leadership teams to turn ambiguous AI ideas into measurable outcomes—without compromising ethics, privacy, or control.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-slate-50/20 hover:bg-slate-100 transition">
<span>Schedule a discovery session</span>
<span className="h-4 w-4" id="icon-calendar"></span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:bg-slate-900 transition">
<span className="h-4 w-4" id="icon-play"></span>
<span>View case studies</span>
</button>
</div>
<div className="grid grid-cols-3 gap-4 text-xs sm:text-sm text-slate-400">
<div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-70 mix-blend-screen"></div>
<div className="relative">
<div className="text-sm font-semibold text-slate-50 tracking-tight">42%</div>
<div>Average reduction in operational cycle time</div>
</div>
</div>
<div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-70 mix-blend-screen"></div>
<div className="relative">
<div className="text-sm font-semibold text-slate-50 tracking-tight">7.3x</div>
<div>Median ROI across AI initiatives</div>
</div>
</div>
<div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-70 mix-blend-screen"></div>
<div className="relative">
<div className="text-sm font-semibold text-slate-50 tracking-tight">120+</div>
<div>AI systems shipped into production</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-violet-500/10 blur-2xl opacity-80"></div>
<div className="relative rounded-3xl border border-slate-800/90 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition-transform duration-300 will-change-transform" id="hero-card" style={{transformStyle: 'preserve-3d'}}>
<div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 to-slate-900/90 px-5 sm:px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex -space-x-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
</div>
<span className="text-xs font-medium text-slate-300">AI Readiness Snapshot</span>
</div>
<span className="text-[0.65rem] text-slate-500 uppercase tracking-[0.12em]">Interactive</span>
</div>
<div className="p-5 sm:p-6 space-y-5">

<div className="grid grid-cols-3 gap-4 text-xs">
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] uppercase tracking-[0.14em] text-sky-300/80">Maturity</span>
<span className="h-3.5 w-3.5" id="icon-sparkles"></span>
</div>
<div className="text-base font-semibold text-slate-50 tracking-tight">LEVEL 3</div>
<p className="text-xs text-slate-400">Data-rich, under-automated</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] uppercase tracking-[0.14em] text-cyan-300/80">Return</span>
<span className="h-3.5 w-3.5" id="icon-trending-up"></span>
</div>
<div className="text-base font-semibold text-emerald-400 tracking-tight">+31%</div>
<p className="text-xs text-slate-400">Projected efficiency lift</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] uppercase tracking-[0.14em] text-violet-300/80">Risk</span>
<span className="h-3.5 w-3.5" id="icon-shield"></span>
</div>
<div className="text-base font-semibold text-amber-300 tracking-tight">Moderate</div>
<p className="text-xs text-slate-400">Governance required</p>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-4 w-4" id="icon-layers"></span>
<span className="text-xs font-medium text-slate-200">90-Day AI Roadmap</span>
</div>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-[0.14em]">3 phases</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/10 border border-sky-500/50 flex items-center justify-center">
<span className="text-[0.65rem] text-sky-300 font-semibold">01</span>
</div>
<div className="flex-1 flex items-center justify-between text-xs text-slate-300">
<span>Discover</span>
<span className="text-slate-500">Weeks 1–2</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center">
<span className="text-[0.65rem] text-cyan-300 font-semibold">02</span>
</div>
<div className="flex-1 flex items-center justify-between text-xs text-slate-300">
<span>Design</span>
<span className="text-slate-500">Weeks 3–6</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full bg-violet-500/10 border border-violet-500/50 flex items-center justify-center">
<span className="text-[0.65rem] text-violet-300 font-semibold">03</span>
</div>
<div className="flex-1 flex items-center justify-between text-xs text-slate-300">
<span>Deliver</span>
<span className="text-slate-500">Weeks 7–12</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[0.6rem] text-slate-300">AL</div>
<div className="h-6 w-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[0.6rem] text-slate-300">MK</div>
<div className="h-6 w-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[0.6rem] text-slate-300">JS</div>
</div>
<span>Advised teams from Series B to Fortune 100.</span>
</div>
<button className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-200">
<span>Get an AI readiness assessment</span>
<span className="h-3.5 w-3.5" id="icon-arrow-right"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">AI consulting, end‑to‑end.</h2>
<p className="text-base text-slate-300 max-w-xl">
                From strategy to deployment, we embed with your teams to ship durable AI capabilities.
              </p>
</div>
<div className="flex flex-wrap gap-2 text-xs">
<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-200">AI strategy</span>
<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-200">GenAI copilots</span>
<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-200">ML platforms</span>
<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-200">Responsible AI</span>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition shadow-lg shadow-slate-950/60 overflow-hidden">
<div className="p-5 sm:p-6 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-sky-500/10 border border-sky-500/50 flex items-center justify-center">
<span className="h-4 w-4 text-sky-300" id="icon-compass"></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">AI Strategy &amp; Roadmapping</h3>
</div>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-[0.14em]">01</span>
</div>
<p className="text-sm text-slate-300">
                  Map opportunities, de‑risk investments, and align stakeholders around measurable outcomes.
                </p>
<ul className="text-sm text-slate-300 space-y-1.5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Executive AI briefings</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Opportunity heatmaps</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>90‑day &amp; 12‑month roadmaps</span>
</li>
</ul>
</div>
<div className="border-t border-slate-800/80 bg-gradient-to-r from-slate-950 to-slate-900/60 px-5 sm:px-6 py-3 flex items-center justify-between text-xs">
<span className="text-slate-300">For leadership teams shaping their AI bets.</span>
<span className="h-4 w-4 text-sky-300" id="icon-chevron"></span>
</div>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition shadow-lg shadow-slate-950/60 overflow-hidden">
<div className="p-5 sm:p-6 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center">
<span className="h-4 w-4 text-cyan-300" id="icon-bot"></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">GenAI Systems &amp; Automation</h3>
</div>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-[0.14em]">02</span>
</div>
<p className="text-sm text-slate-300">
                  Design and deploy custom AI copilots, agents, and automation flows around your data.
                </p>
<ul className="text-sm text-slate-300 space-y-1.5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<span>Task‑specific copilots</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<span>Retrieval‑augmented generation</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<span>Human‑in‑the‑loop workflows</span>
</li>
</ul>
</div>
<div className="border-t border-slate-800/80 bg-gradient-to-r from-slate-950 to-slate-900/60 px-5 sm:px-6 py-3 flex items-center justify-between text-xs">
<span className="text-slate-300">For teams ready to automate key flows.</span>
<span className="h-4 w-4 text-cyan-300" id="icon-chevron-2"></span>
</div>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition shadow-lg shadow-slate-950/60 overflow-hidden">
<div className="p-5 sm:p-6 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-violet-500/10 border border-violet-500/50 flex items-center justify-center">
<span className="h-4 w-4 text-violet-300" id="icon-balance"></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Responsible AI &amp; Governance</h3>
</div>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-[0.14em]">03</span>
</div>
<p className="text-sm text-slate-300">
                  Architect guardrails, monitoring, and policy so AI is safe and explainable.
                </p>
<ul className="text-sm text-slate-300 space-y-1.5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<span>Risk &amp; impact assessments</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<span>Governance frameworks</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<span>Monitoring &amp; playbooks</span>
</li>
</ul>
</div>
<div className="border-t border-slate-800/80 bg-gradient-to-r from-slate-950 to-slate-900/60 px-5 sm:px-6 py-3 flex items-center justify-between text-xs">
<span className="text-slate-300">For regulated or high‑risk use cases.</span>
<span className="h-4 w-4 text-violet-300" id="icon-chevron-3"></span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="industries">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">

<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Trusted across critical industries.</h2>
<p className="text-base text-slate-300 max-w-xl">
                We work with teams who can’t afford experiments that don’t ship—fintech, healthcare, logistics, SaaS, and more.
              </p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200">Financial Services</span>
<span className="text-[0.65rem] text-emerald-300">+24% NPS</span>
</div>
<p className="text-sm text-slate-300">
                  Automated credit decisioning and portfolio monitoring with explainability.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200">Healthcare &amp; Life Sciences</span>
<span className="text-[0.65rem] text-sky-300">32% faster</span>
</div>
<p className="text-sm text-slate-300">
                  Clinical triage assist and document workflows that preserve privacy.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200">Operations &amp; Logistics</span>
<span className="text-[0.65rem] text-cyan-300">-18% cost</span>
</div>
<p className="text-sm text-slate-300">
                  Demand forecasting, routing, and incident prediction.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200">SaaS &amp; Digital Products</span>
<span className="text-[0.65rem] text-violet-300">3.1x LTV</span>
</div>
<p className="text-sm text-slate-300">
                  Embedded AI features, personalization, and in‑product copilots.
                </p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-br from-sky-500/10 via-slate-900 to-violet-500/10 blur-2xl opacity-70"></div>
<div className="relative rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-5 sm:p-6 space-y-5 shadow-2xl shadow-slate-950/70">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs font-medium text-slate-200">Impact snapshot</p>
<p className="text-sm text-slate-400">Last 24 client engagements.</p>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[0.65rem] text-slate-200">
<span className="h-3.5 w-3.5" id="icon-sliders"></span>
<span>Filter</span>
</button>
</div>
<div className="grid grid-cols-3 gap-4 text-xs">
<div className="space-y-1">
<p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">Median ROI</p>
<p className="text-base font-semibold tracking-tight text-emerald-400">7.3x</p>
<p className="text-xs text-slate-400">vs. baseline investments</p>
</div>
<div className="space-y-1">
<p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">Time to value</p>
<p className="text-base font-semibold tracking-tight text-sky-300">11 weeks</p>
<p className="text-xs text-slate-400">to first production release</p>
</div>
<div className="space-y-1">
<p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">Adoption</p>
<p className="text-base font-semibold tracking-tight text-violet-300">86%</p>
<p className="text-xs text-slate-400">active usage after 90 days</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-[0.65rem] text-slate-400">
<span>Operational efficiency</span>
<span>+42%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400"></div>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-slate-400">
<span>Revenue impact</span>
<span>+19%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"></div>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-slate-400">
<span>Risk reduction</span>
<span>-27%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-300"></div>
</div>
</div>
<div className="border-t border-slate-800 pt-4 flex items-start gap-3">
<div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-[0.65rem] text-slate-200">CT</div>
<div className="space-y-1">
<p className="text-xs text-slate-300">
                    “NovaAI helped us move from scattered experiments to a coherent AI portfolio in under a quarter.”
                  </p>
<p className="text-[0.7rem] text-slate-400">Chief Transformation Officer, Logistics Firm</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">A delivery model built for clarity.</h2>
<p className="text-base text-slate-300 max-w-xl">
                Focused, outcome‑driven sprints that respect your teams’ time and your regulatory constraints.
              </p>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400">
<span className="h4 w-4 text-emerald-300" id="icon-check-circle"></span>
<span>Remote‑first, with on‑site sessions for key milestones.</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-3">
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-7 w-7 rounded-full bg-sky-500/10 border border-sky-500/60 flex items-center justify-center text-[0.7rem] text-sky-300 font-semibold">01</span>
<span className="text-xs font-medium text-slate-200">Discover</span>
</div>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-[0.16em]">2–3 weeks</span>
</div>
<p className="text-sm text-slate-300">
                Immerse in your context: business model, tech stack, data, and constraints.
              </p>
<ul className="text-xs text-slate-400 space-y-1.5">
<li>• Executive interviews</li>
<li>• Data audits &amp; feasibility</li>
<li>• Opportunity scoring</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-7 w-7 rounded-full bg-cyan-500/10 border border-cyan-500/60 flex items-center justify-center text-[0.7rem] text-cyan-300 font-semibold">02</span>
<span className="text-xs font-medium text-slate-200">Design</span>
</div>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-[0.16em]">4–6 weeks</span>
</div>
<p className="text-sm text-slate-300">
                Co‑design systems and workflows with a focus on measurability and safety.
              </p>
<ul className="text-xs text-slate-400 space-y-1.5">
<li>• Experience &amp; workflow mapping</li>
<li>• Model &amp; infra architecture</li>
<li>• Risk &amp; compliance embeds</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-7 w-7 rounded-full bg-violet-500/10 border border-violet-500/60 flex items-center justify-center text-[0.7rem] text-violet-300 font-semibold">03</span>
<span className="text-xs font-medium text-slate-200">Deliver</span>
</div>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-[0.16em]">ongoing</span>
</div>
<p className="text-sm text-slate-300">
                Build, integrate, and ship to production—then stay close as partners.
              </p>
<ul className="text-xs text-slate-400 space-y-1.5">
<li>• Implementation squads</li>
<li>• Security &amp; compliance support</li>
<li>• Training &amp; change management</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="insights">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Insights from the field.</h2>
<p className="text-base text-slate-300 max-w-xl">
                Playbooks and architectures from real deployments.
              </p>
</div>
<button className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-200">
<span>View all insights</span>
<span className="h-3.5 w-3.5" id="icon-arrow-right-2"></span>
</button>
</div>
<div className="grid gap-6 md:grid-cols-3">
<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition overflow-hidden flex flex-col">
<div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 to-slate-900/70 px-4 py-2 flex items-center justify-between">
<span className="text-[0.65rem] text-sky-300 uppercase tracking-[0.16em]">AI Strategy</span>
<span className="text-[0.65rem] text-slate-500">8 min read</span>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-sky-300">
                  The 3 bets every leadership team should make on AI in 2025
                </h3>
<p className="text-sm text-slate-300">
                  A practical lens to decide where AI fits in your roadmap.
                </p>
<div className="mt-auto flex items-center justify-between text-xs text-slate-400">
<span>By Elena Park</span>
<span className="inline-flex items-center gap-1 group-hover:text-sky-300">
<span>Read</span>
<span className="h-3.5 w-3.5" id="icon-arrow-right-3"></span>
</span>
</div>
</div>
</article>
<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition overflow-hidden flex flex-col">
<div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 to-slate-900/70 px-4 py-2 flex items-center justify-between">
<span className="text-[0.65rem] text-cyan-300 uppercase tracking-[0.16em]">Architecture</span>
<span className="text-[0.65rem] text-slate-500">11 min read</span>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-cyan-300">
                  Designing genAI systems that your security team can approve
                </h3>
<p className="text-sm text-slate-300">
                  Reference patterns to align data, infra, and security stakeholders.
                </p>
<div className="mt-auto flex items-center justify-between text-xs text-slate-400">
<span>By Marcus Lin</span>
<span className="inline-flex items-center gap-1 group-hover:text-cyan-300">
<span>Read</span>
<span className="h-3.5 w-3.5" id="icon-arrow-right-4"></span>
</span>
</div>
</div>
</article>
<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition overflow-hidden flex flex-col">
<div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 to-slate-900/70 px-4 py-2 flex items-center justify-between">
<span className="text-[0.65rem] text-violet-300 uppercase tracking-[0.16em]">Change</span>
<span className="text-[0.65rem] text-slate-500">6 min read</span>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-violet-300">
                  Driving AI adoption without overwhelming your teams
                </h3>
<p className="text-sm text-slate-300">
                  A playbook for communication, training, and incentives.
                </p>
<div className="mt-auto flex items-center justify-between text-xs text-slate-400">
<span>By Sofia Duarte</span>
<span className="inline-flex items-center gap-1 group-hover:text-violet-300">
<span>Read</span>
<span className="h-3.5 w-3.5" id="icon-arrow-right-5"></span>
</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-800/70">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="relative rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
<div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-sky-500/20 via-violet-500/10 to-transparent opacity-70"></div>
<div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center p-6 sm:p-8">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
<span className="h-3.5 w-3.5 text-sky-300" id="icon-sparkles-2"></span>
<span>Start with a no‑obligation strategy session</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Ready to make AI a board‑level asset, not a side project?
                </h2>
<p className="text-base text-slate-300 max-w-xl">
                  In 45 minutes, we’ll map your AI opportunity space and outline a path to results in under a quarter.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-slate-50/20 hover:bg-slate-100 transition">
<span>Book a strategy call</span>
<span className="h-4 w-4" id="icon-calendar-2"></span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:bg-slate-900 transition">
<span className="h-4 w-4" id="icon-file-text"></span>
<span>Download capabilities deck</span>
</button>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
<div className="flex items-center gap-2">
<span className="h-3.5 w-3.5 text-emerald-300" id="icon-lock"></span>
<span>We sign your NDA by default.</span>
</div>
<div className="flex items-center gap-2">
<span className="h-3.5 w-3.5 text-sky-300" id="icon-globe"></span>
<span>Serving clients across North America &amp; Europe.</span>
</div>
</div>
</div>
<form className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-200" htmlFor="name">Name</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400" id="name" name="name" placeholder="Alex Rivera" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-200" htmlFor="email">Work email</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400" id="email" name="email" placeholder="alex@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-200" htmlFor="company">Company</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400" id="company" name="company" placeholder="Acme Industries" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-200" htmlFor="focus">Primary focus</label>
<select className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400" id="focus" name="focus">
<option className="bg-slate-950">AI strategy &amp; portfolio</option>
<option className="bg-slate-950">GenAI copilots &amp; agents</option>
<option className="bg-slate-950">Data &amp; ML platform</option>
<option className="bg-slate-950">Responsible AI &amp; governance</option>
<option className="bg-slate-950">Other (share details below)</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-200" htmlFor="message">What would you like to explore?</label>
<textarea className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400" id="message" name="message" placeholder="Briefly describe your goals, timelines, and any constraints." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition" type="submit">
<span>Submit inquiry</span>
<span className="h-4 w-4" id="icon-send"></span>
</button>
<p className="text-[0.7rem] text-slate-500">
                  We typically respond within one business day. No mailing lists, no spam—just a conversation.
                </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/70">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-xl bg-gradient-to-br from-sky-400 via-cyan-300 to-violet-500 flex items-center justify-center">
<span className="text-[0.7rem] font-semibold tracking-tight text-slate-950">NA</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-50">NovaAI Consulting</span>
</div>
<p className="text-sm text-slate-400 max-w-md">
              Independent AI advisory and delivery partner for teams who need systems that work in the real world.
            </p>
</div>
<div className="grid grid-cols-2 sm:flex sm:flex-row gap-6 text-xs">
<div className="space-y-2">
<p className="text-[0.7rem] font-medium text-slate-300 uppercase tracking-[0.16em]">Company</p>
<ul className="space-y-1.5 text-slate-400">
<li><a className="hover:text-slate-200" href="#">About</a></li>
<li><a className="hover:text-slate-200" href="#">Team</a></li>
<li><a className="hover:text-slate-200" href="#">Careers</a></li>
</ul>
</div>
<div className="space-y-2">
<p className="text-[0.7rem] font-medium text-slate-300 uppercase tracking-[0.16em]">Resources</p>
<ul className="space-y-1.5 text-slate-400">
<li><a className="hover:text-slate-200" href="#insights">Insights</a></li>
<li><a className="hover:text-slate-200" href="#">Case studies</a></li>
<li><a className="hover:text-slate-200" href="#">Newsletter</a></li>
</ul>
</div>
<div className="space-y-2">
<p className="text-[0.7rem] font-medium text-slate-300 uppercase tracking-[0.16em]">Legal</p>
<ul className="space-y-1.5 text-slate-400">
<li><a className="hover:text-slate-200" href="#">Privacy</a></li>
<li><a className="hover:text-slate-200" href="#">Terms</a></li>
<li><a className="hover:text-slate-200" href="#">Data processing</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[0.7rem] text-slate-500">
<p>© <span id="year"></span> NovaAI Consulting. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-1 hover:text-slate-300" href="#">
<span className="h-3.5 w-3.5" id="icon-linkedin"></span>
<span>LinkedIn</span>
</a>
<a className="inline-flex items-center gap-1 hover:text-slate-300" href="#">
<span className="h-3.5 w-3.5" id="icon-mail"></span>
<span>hello@novaai.consulting</span>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
