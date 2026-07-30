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
      {

      // Initialize lucide icons with 1.5 stroke width
      window.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 blur-xl"><iframe frameborder="0" height="100%" src="https://my.spline.design/iphone14wallpaper9copy-d98969f84b43360bb0c164413b743e10" width="100%"></iframe></div>

<header className="sticky top-0 z-30 supports-[backdrop-filter]:bg-black/40 bg-black/30 border-white/10 border-b backdrop-blur">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between relative">

<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tighter" style={{letterSpacing: `-0.02em`}}>BA</span>
</div>
<div className="flex flex-col leading-none space-y-1">
<span className="text-[13px] font-medium text-white/80">Marketing & Communications</span>
<span className="text-[11px] font-medium text-white/40">AI Platform Evaluation</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="text-[13px] font-medium text-white/70 hover:text-white transition-colors" href="#compare">Platform Overview</a>
<a className="text-[13px] font-medium text-white/70 hover:text-white transition-colors" href="#details">Distinct Strength</a>
<a className="text-[13px] font-medium text-white/70 hover:text-white transition-colors" href="#suggestions">Suggestions</a>
</nav>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full ring-1 px-2.5 py-1 text-[11px] font-medium bg-slate-500/10 text-slate-400 ring-slate-500/20" style={{}}>Internal Draft</span>
</div>
</div>
</header>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-32 pb-32 pl-6" id="overview">
<div className="items-center">
<div className="space-y-5">
<h1 className="md:text-[34px] text-4xl font-bold tracking-normal">
            AI Platform Evaluation for BAYADA Marketing & Communications
          </h1>
<p className="text-[15px] leading-relaxed text-lg text-white/70 mt-3">
            A concise, side-by-side look at Lovable and Aura Build—helping our marketing & communications team choose the best tool for web experience, UX/UI design, and on-brand creative assets.
          </p>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pr-6 pb-4 pl-6" id="compare">
<div className="flex gap-3 mb-4 items-center">
<svg className="lucide lucide-columns-3 w-4 h-4 text-white/50" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path></svg>
<h2 className="text-[22px] md:text-[24px] font-semibold tracking-tight">Platform Overview</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="rounded-2xl ring-1 ring-white/10 bg-white/5 overflow-hidden">
<div className="md:p-7 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 pt-6 pr-6 pb-6 pl-6" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center ring-1 ring-white/25" style={{}}>
<svg className="lucide lucide-code-2 w-5 h-5 text-white" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Lovable</h3>
</div>
<p className="mt-2 text-[13px] md:text-[14px] text-white/80">Chat-driven no/low-code platform that scaffolds full front- and back-end apps (UI, database, auth, payments) in minutes—then hosts them.</p>
</div>
<div className="md:px-7 bg-[#0B0F13]/25 pt-6 pr-6 pb-6 pl-6">

<div className="border-white/10 border-b pt-6 pb-6">
<h4 className="text-[11px] font-medium uppercase tracking-widest text-white/50">Key Capabilities</h4>
<div className="mt-4 space-y-4">
<div className="flex gap-3">
<svg className="lucide lucide-layers w-4 h-4 mt-0.5 text-violet-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Full Stack Coverage</p>
<p className="text-[14px] text-white/75">UI, backend code, and database integration</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-code-2 w-4 h-4 mt-0.5 text-violet-300" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Custom APIs</p>
<p className="text-[14px] text-white/75">GitHub sync and version control</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 mt-0.5 text-violet-300" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Analytics & Security</p>
<p className="text-[14px] text-white/75">Built-in analytics, SEO optimization, and security reviews</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-rocket w-4 h-4 mt-0.5 text-violet-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Deployment</p>
<p className="text-[14px] text-white/75">Custom domain support with one-click deployment</p>
</div>
</div>
</div>
</div>

<div className="pt-6">
<h4 className="text-[11px] font-medium uppercase tracking-widest text-white/50">BAYADA-focused use cases</h4>
<div className="mt-4 space-y-5">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<p className="font-medium text-[14px] text-white">Launch caregiver-recruitment microsites</p>
<p className="mt-1 text-[14px] text-white/75">Launch caregiver-recruitment microsites that capture forms & route to Salesforce.</p>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="font-medium text-[14px] text-white">Prototype benefit-calculator or branch-locator apps</p>
<p className="mt-1 text-[14px] text-white/75">Prototype benefit-calculator or branch-locator apps without engineering backlog.</p>
</div>
<div className="ring-1 ring-white/10 bg-[#ffffff]/5 rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="font-medium text-[14px] text-white">Internal dashboards marrying databases + marketing data</p>
<p className="text-[14px] text-white/75 mt-1">Spin up internal dashboards marrying databases + marketing data.</p>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl ring-1 ring-white/10 bg-white/5 overflow-hidden">
<div className="md:p-7 bg-gradient-to-br from-sky-500/15 to-indigo-500/10 pt-6 pr-6 pb-6 pl-6" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center ring-1 ring-white/25" style={{}}>
<svg className="lucide lucide-stars w-5 h-5 text-white" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</div>
<h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Aura Build</h3>
</div>
<p className="mt-2 text-[13px] md:text-[14px] text-white/80">Prompt-based design assistant that turns text or images into pixel-perfect, responsive UI and ships clean HTML / Figma files instantly.</p>
</div>
<div className="md:px-7 bg-[#0B0F13]/25 pt-6 pr-6 pb-6 pl-6">

<div className="py-6 border-b border-white/10">
<h4 className="text-[11px] font-medium uppercase tracking-widest text-white/50">Key Capabilities</h4>
<div className="mt-4 space-y-4">
<div className="flex gap-3">
<svg className="lucide lucide-wand-2 w-4 h-4 mt-0.5 text-sky-300" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Prompt-Driven Layouts</p>
<p className="text-[14px] text-white/75">Live Tailwind editing for rapid design iteration</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-figma w-4 h-4 mt-0.5 text-sky-300" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Figma Integration</p>
<p className="text-[14px] text-white/75">Instant round-trip for seamless design handoff</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-image w-4 h-4 mt-0.5 text-sky-300" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18"></rect><circle cx="9" cy="9"></circle><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Image Conversion</p>
<p className="text-[14px] text-white/75">Image-to-HTML conversion for quick prototypes</p>
</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-shield w-4 h-4 mt-0.5 text-sky-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<div className="">
<p className="font-medium text-[14px] text-white">Privacy & AI</p>
<p className="text-[14px] text-white/75">Offline desktop privacy with premium AI models</p>
</div>
</div>
</div>
</div>

<div className="pt-6">
<h4 className="text-[11px] font-medium uppercase tracking-widest text-white/50">BAYADA-focused use cases</h4>
<div className="mt-4 space-y-5">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<p className="font-medium text-[14px] text-white">Generate brand-consistent hero sections</p>
<p className="mt-1 text-[14px] text-white/75">Generate brand-consistent hero sections, email banners & social cards; push to Figma for stakeholder sign-off.</p>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="font-medium text-[14px] text-white">Convert clinician-supplied screenshots</p>
<p className="text-[14px] text-white/75 mt-1">Convert clinician-supplied screenshots into clean HTML for quick landing pages.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<p className="text-[14px] font-medium text-white">Produce multiple design variants for A/B testing</p>
<p className="mt-1 text-[14px] text-white/75">Produce multiple design variants for A/B testing, hand over dev-ready code.</p>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-16 pl-6" id="details">
<div className="" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`}}>

<div className="flex gap-3 mb-4 items-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-white/50" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<h2 className="text-[22px] md:text-[24px] font-semibold tracking-tight">Distinct Strength</h2>
</div>


<section className="mt-8 pb-4">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 w-full mt-8 pb-4" id="">

<div className="bg-neutral-900/50 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">Lovable strengths</h2>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400 ring-1 ring-emerald-500/20" style={{}}>
<svg className="lucide lucide-check-circle-2 h-3.5 w-3.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg> 10
                </span>
</div>
<div className="mt-4 space-y-5">
<div className="">
<div className="text-xs font-medium text-neutral-400 mb-2">Development Infrastructure</div>
<ul className="space-y-2">
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">Back end (React / TypeScript) code generation</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">Database link + Auth</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">Custom APIs / Edge Functions</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">GitHub version control (export)</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">Custom-domain publish & SSL</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">AI-powered scan</span>
</li>
</ul>
</div>
<div className="">
<div className="mb-2 text-xs font-medium text-neutral-400">Deployment & Analytics</div>
<ul className="space-y-2">
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">One-click hosting / publish</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">Built-in visitor analytics</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200"> toolkit</span>
</li>
</ul>
</div>
<div className="">
<div className="text-xs font-medium text-neutral-400 mb-2">Workflow</div>
<ul className="space-y-2">
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">Real-time multiplayer editing</span>
</li>
</ul>
</div>
</div>
</div>

<div className="pr5 bg-neutral-900/50 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h2 className="sm:text-2xl text-xl font-semibold text-neutral-50 tracking-tight">Shared capabilities</h2>
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-2 py-1 text-xs text-sky-400 ring-1 ring-sky-500/20" style={{}}>
<svg className="lucide lucide-equal h-3.5 w-3.5" data-lucide="equal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><line></line></svg> 3
                </span>
</div>
<ul className="mt-4 space-y-2">
<div className="text-xs font-medium text-neutral-400 mb-2">Design</div><li className="flex items-center justify-between gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<div className="flex items-center gap-3">
<svg className="lucide lucide-layout-dashboard h-4 w-4 text-sky-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect><rect height="9" rx="1" width="7"></rect></svg>
<span className="text-sm text-neutral-200">Visual editor</span>
</div>
</li>
<li className="flex items-center justify-between gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<div className="flex items-center gap-3">
<svg className="lucide lucide-library h-4 w-4 text-sky-400" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<span className="text-sm text-neutral-200">Prompt / template library</span>
</div>
</li><li className="flex items-center justify-between gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<div className="flex items-center gap-3">
<svg className="lucide lucide-figma h-4 w-4 text-sky-400" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<span className="text-sm text-neutral-200">Figma import</span>
</div>
</li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">Aura Build strengths</h2>
<span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-1 text-xs text-violet-400 ring-1 ring-violet-500/20" style={{}}>
<svg className="lucide lucide-check-circle-2 h-3.5 w-3.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg> 7
                </span>
</div>
<div className="mt-4 space-y-5">
<div className="">
<div className="text-xs font-medium text-neutral-400 mb-2">Development Infrastructure</div>
<ul className="space-y-2">
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-wand-2 h-4 w-4 text-violet-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
<span className="text-sm text-neutral-200">Image → Front end code (HTML)</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-terminal h-4 w-4 text-violet-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-sm text-neutral-200">Live code mode</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-smartphone h-4 w-4 text-violet-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
<span className="text-sm text-neutral-200">Responsive design scaffolding</span>
</li>
</ul>
</div>
<div className="">
<div className="text-xs font-medium text-neutral-400 mb-2">Design</div>
<ul className="space-y-2">
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-figma h-4 w-4 text-violet-400" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<span className="text-sm text-neutral-200">Figma export</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-sparkle h-4 w-4 text-violet-400" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm text-neutral-200">Animation & motion presets</span>
</li>
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-bot h-4 w-4 text-violet-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="16"></rect><path></path><path></path><path></path><path></path></svg>
<span className="text-sm text-neutral-200">Access to multiple AI models (GPT-5, Claude, Gemini)</span>
</li>
</ul>
</div>
<div className="">
<div className="text-xs font-medium text-neutral-400 mb-2">Workflow</div>
<ul className="space-y-2">
<li className="flex items-start gap-3 rounded-lg bg-neutral-950/50 p-3 ring-1 ring-white/5">
<svg className="lucide lucide-computer h-4 w-4 text-violet-400" data-lucide="computer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="14"></rect><rect height="8" rx="2" width="20"></rect><path></path><path></path></svg>
<span className="text-sm text-neutral-200">Offline desktop app</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<div className="mt-8" id="suggestions">

<div className="flex items-center gap-3 mb-4">
<svg className="lucide lucide-sparkles w-4 h-4 text-white/50" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<h2 className="text-[22px] md:text-[24px] font-semibold tracking-tight">Suggestions</h2>
</div>
<div className="ring-1 ring-white/10 md:p-6 bg-[#0B0F13]/25 rounded-2xl pt-5 pr-5 pb-5 pl-5" style={{}}>
<p className="text-[13px] text-white/70">Match each tool to its sweet spot — functional vs. visual</p>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 px-2 py-1 text-[11px] font-medium text-violet-300" style={{}}>
<svg className="lucide lucide-code-2 w-3.5 h-3.5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> Lovable
                  </span>
</div>
<h4 className="mt-3 text-[18px] md:text-[20px] font-semibold tracking-tight">Fullstack Backend Development</h4>
<div className="mt-3 border-t border-white/10 pt-3">
<div className="text-[11px] uppercase tracking-widest text-white/50 mb-1">Best For</div>
<p className="text-[14px] text-white/80">Functional, data-driven microsites and internal tools that need rapid deployment</p>
</div>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 ring-1 ring-sky-500/20 px-2 py-1 text-[11px] font-medium text-sky-300" style={{}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg> Aura Build
                  </span>
</div>
<h4 className="mt-3 text-[18px] md:text-[20px] font-semibold tracking-tight">High-Velocity Frontend Production</h4>
<div className="mt-3 border-t border-white/10 pt-3">
<div className="text-[11px] uppercase tracking-widest text-white/50 mb-1">Best For</div>
<p className="text-[14px] text-white/80">Rapidly producing polished, on-brand visuals for stakeholder approval</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
<div className="text-[12px] text-white/50">
          © <span className="font-medium text-white/70">BAYADA</span> Marketing & Communications · Internal use only
        </div>
<div className="flex items-center gap-4">
<a className="text-[12px] text-white/60 hover:text-white transition inline-flex items-center gap-1" href="#overview">
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
            Back to top
          </a>
<a className="text-[12px] text-white/60 hover:text-white transition inline-flex items-center gap-1" href="https://www.bayada.com" target="_blank">
<svg className="lucide lucide-globe w-3.5 h-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
            bayada.com
          </a>
</div>
</div>
</footer>


    </>
  );
}
