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



    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0">
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(1200px 600px at 10% -10%, #4f46e5 0%, transparent 55%), radial-gradient(1000px 600px at 90% -10%, #06b6d4 0%, transparent 60%)'}}></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '56px 56px'}}></div>
<div className="absolute inset-0" style={{maskImage: 'radial-gradient(60% 55% at 50% 20%, black 30%, transparent 90%)', WebkitMaskImage: 'radial-gradient(60% 55% at 50% 20%, black 30%, transparent 90%)', backdropFilter: 'blur(2px)'}}></div>
</div>

<header className="relative z-10">
<div className="flex max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<span className="text-slate-100 text-sm font-semibold tracking-tight">AI</span>
</div>
<span className="text-base font-medium text-slate-100 tracking-tight">HubActually</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
</nav>
<div className="flex items-center gap-3">
<button className="inline-flex items-center px-3.5 py-2 text-sm text-slate-900 bg-slate-100 hover:bg-white rounded-md transition-colors ring-1 ring-white/10">
          Get access
        </button>
</div>
</div>
</header>

<section className="relative z-10">
<div className="md:pt-12 max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-10 pl-6">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-100">Your personal fleet of AI specialists</h1>
<p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">Launch task‑specific agents built for growth, storytelling, legal readiness, and focus. Precision tools, zero guesswork.</p>
</div>

<div className="mt-6">
</div>
</div>
</section>

<main className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pb-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">


<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent pointer-events-none"></div>
<div className="relative p-5 flex flex-col h-full">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-500/15 ring-1 ring-indigo-400/30 flex items-center justify-center text-indigo-300">
<svg className="lucide lucide-credit-card h-4.5 w-4.5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">CrediSniff</h3>
<p className="text-xs text-slate-400">Your AI credit investigator</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Don’t risk your rep on shady offers. Paste any affiliate product page and get a straight-shooting breakdown of what’s real, what’s hype, and what to avoid. Built for serious affiliate pros.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Finance • Analysis</span>
<a className="inline-flex items-center gap-1.5 text-sm text-indigo-300 hover:text-indigo-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-pink-500/15 ring-1 ring-pink-400/30 text-pink-300 flex items-center justify-center">
<svg className="lucide lucide-sparkles h-4.5 w-4.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">TaleSpark</h3>
<p className="text-xs text-slate-400">Turns your ideas into magnetic short stories</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Turn a single idea into a magical, kid-friendly story in minutes. Perfect for parents, teachers, and creatives — with custom tales, age-appropriate language, and illustration prompts included.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Story • Marketing</span>
<a className="inline-flex items-center gap-1.5 text-sm text-pink-300 hover:text-pink-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-teal-500/15 ring-1 ring-teal-400/30 text-teal-300 flex items-center justify-center">
<svg className="lucide lucide-activity h-4.5 w-4.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">PostPulse</h3>
<p className="text-xs text-slate-400">Your social content accelerator</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Transform updates into captivating, story-driven blog posts your audience will actually care about. Perfect for documenting progress, sharing insights, and staying consistent with your brand — with built-in style mimicry and image support.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Social • Trends</span>
<a className="inline-flex items-center gap-1.5 text-sm text-teal-300 hover:text-teal-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-amber-500/15 ring-1 ring-amber-400/30 text-amber-300 flex items-center justify-center">
<svg className="lucide lucide-badge-check h-4.5 w-4.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">BrandSpark</h3>
<p className="text-xs text-slate-400">Builds your brand in minutes</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Create logos that stand out — instantly.

BrandSpark GPT gives you custom logo ideas, design prompts, and AI-generated logo images in seconds. Whether you're launching a new brand or refreshing an old one, this tool helps you spark the perfect visual identity — no design skills needed.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Brand • Positioning</span>
<a className="inline-flex items-center gap-1.5 text-sm text-amber-300 hover:text-amber-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-fuchsia-500/15 ring-1 ring-fuchsia-400/30 text-fuchsia-300 flex items-center justify-center">
<svg className="lucide lucide-quote h-4.5 w-4.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">QuoteFlow</h3>
<p className="text-xs text-slate-400">Transforms powerful quotes into marketing gold</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Turn powerful quotes into emails that sell.

QuoteFlow GPT helps affiliate marketers, creators, and entrepreneurs write compelling emails and P.S. sections — using motivational business quotes as the hook.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Copy • Inspiration</span>
<a className="inline-flex items-center gap-1.5 text-sm text-fuchsia-300 hover:text-fuchsia-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-sky-500/15 ring-1 ring-sky-400/30 text-sky-300 flex items-center justify-center">
<svg className="lucide lucide-timer h-4.5 w-4.5" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">🧰 The 60‑Minute Product</h3>
<p className="text-xs text-slate-400">Your fast-track product builder</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">This GPT helps you go from zero to sellable using a proven 4-prompt system. Whether you want to create a guide, checklist, prompt pack, or template, The 60-Minute Product will walk you through it—fast.

Perfect for creators, coaches, solopreneurs, or anyone tired of overthinking product creation.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-sky-300/80">Creation • Coaching</span>
<a className="inline-flex items-center gap-1.5 text-sm text-sky-300 hover:text-sky-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 text-emerald-300 flex items-center justify-center">
<svg className="lucide lucide-target h-4.5 w-4.5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold text-slate-100">Nicher</h3>
<p className="text-xs text-slate-400">Your niche-finding strategist</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Discovers profitable, underserved niches and delivers data-driven insights, keywords, and audience hooks to dominate them.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Research • SEO</span>
<a className="inline-flex items-center gap-1.5 text-sm text-emerald-300 hover:text-emerald-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-yellow-500/15 ring-1 ring-yellow-400/30 text-yellow-300 flex items-center justify-center">
<svg className="lucide lucide-trophy h-4.5 w-4.5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">Affluence 🎯</h3>
<p className="text-xs text-slate-400">Your money-mindset and abundance architect</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Affluence is a custom-built GPT designed to do what most affiliate marketers only wish they could automate. With just a niche or website URL, Affluence generates complete, high-converting marketing campaigns in seconds.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Mindset • Strategy</span>
<a className="inline-flex items-center gap-1.5 text-sm text-yellow-300 hover:text-yellow-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-purple-500/15 ring-1 ring-purple-400/30 text-purple-300 flex items-center justify-center">
<svg className="lucide lucide-scroll-text h-4.5 w-4.5" data-lucide="scroll-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">📜 Legify – Legal Page Generator</h3>
<p className="text-xs text-slate-400">Your instant website legal kit</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-300 leading-relaxed">Generates complete, compliant legal pages — Terms, Privacy, Refund, and more — tailored for your business and region.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Legal • Compliance</span>
<a className="inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-purple-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-rose-500/15 ring-1 ring-rose-400/30 text-rose-300 flex items-center justify-center">
<svg className="lucide lucide-book-open h-4.5 w-4.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">NarrativeNest</h3>
<p className="text-xs text-slate-400">Your storytelling command center</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">NarrativeNest by HubActually is your ultimate story-selling companion, designed for bloggers, content creators, and affiliate marketers who know that stories sell better than pitches. This GPT weaves powerful, authentic narratives that hook your readers and naturally transition into product promotions.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Narrative • Lifecycle</span>
<a className="inline-flex items-center gap-1.5 text-sm text-rose-300 hover:text-rose-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/30 text-cyan-300 flex items-center justify-center">
<svg className="lucide lucide-map h-4.5 w-4.5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">MissionMap</h3>
<p className="text-xs text-slate-400">Your clarity companion for entrepreneurs</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">Turn your ideas into action—with a real plan.

MissionMap GPT transforms vague goals into structured, achievable missions using the SMART method—complete with custom daily actions, weekly milestones, and habit-building prompts.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Planning • Roadmap</span>
<a className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-500/15 ring-1 ring-indigo-400/30 text-indigo-300 flex items-center justify-center">
<svg className="lucide lucide-plane h-4.5 w-4.5" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">FlightMode</h3>
<p className="text-xs text-slate-400">Your travel-hack system</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">FlightMode AI by HubActually is your smart travel hacking assistant — built to uncover cheap, unconventional ways to fly. Whether you're planning a weekend getaway or a multi-country tour, this GPT helps you find hidden routes, error fares, budget carriers, and split-ticket opportunities that traditional search engines miss.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Focus • Workflow</span>
<a className="inline-flex items-center gap-1.5 text-sm text-indigo-300 hover:text-indigo-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/6 to-transparent"></div>
<div className="relative p-5 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-red-500/15 ring-1 ring-red-400/30 text-red-300 flex items-center justify-center">
<svg className="lucide lucide-clapperboard h-4.5 w-4.5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold text-slate-100">ScriptFlow</h3>
<p className="text-xs text-slate-400">Your AI screenwriter and video script architect</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300 mt-4">ScriptFlow helps creators and marketers turn any idea into viral, high-converting video scripts.
You’ll get one long-form YouTube script (8–10 minutes) and three short-form versions (30–45 seconds each) optimized for Reels, TikToks, or Shorts.</p>
<div className="mt-5 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Video • Scripting</span>
<a className="inline-flex items-center gap-1.5 text-sm text-red-300 hover:text-red-200 transition" href="#">
                Launch
                <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>
</div>

<div className="mt-10 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">Thirteen purpose-built GPTs. One seamless workflow.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 hover:bg-indigo-400 transition text-sm text-white bg-indigo-500 ring-indigo-400/30 ring-1 rounded-md pt-2 pr-3.5 pb-2 pl-3.5" href="#">Free Community</a>
</div>
</div>
</div>
</main>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-6 py-10 border-t border-white/10">
<div className="flex flex-col md:flex-row gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<span className="text-slate-100 text-[11px] font-semibold tracking-tight">AI</span>
</div>
<span className="text-sm text-slate-400">© 2025 HubActually. All rights reserved.</span>
</div>
<div className="flex items-center gap-5 text-sm text-slate-400">
<a className="hover:text-slate-200 transition" href="#">Privacy</a>
<a className="hover:text-slate-200 transition" href="#">Terms</a>
<a className="hover:text-slate-200 transition" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
