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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(90rem_50rem_at_50%_-10%,rgba(99,102,241,.22),transparent_60%),radial-gradient(70rem_40rem_at_10%_20%,rgba(56,189,248,.14),transparent_55%),radial-gradient(60rem_40rem_at_90%_35%,rgba(16,185,129,.10),transparent_60%)]"></div>
<div className="absolute inset-0 bg-slate-950/70"></div>
</div>
<a className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-50 focus:ring-2 focus:ring-indigo-400/60" href="#main">
    Skip to content
  </a>

<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3" href="#top">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow-sm">
<span className="text-sm font-semibold tracking-tight text-slate-100">MH</span>
</span>
<div className="leading-tight">
<p className="text-sm font-semibold tracking-tight text-slate-100">Muhammad Haris</p>
<p className="text-xs text-slate-300">WordPress • Python • GHL</p>
</div>
</a>
<nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#skills">Skills</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#projects">Projects</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#connect">Connect</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/8 hover:shadow-lg hover:shadow-indigo-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#contact">
<iconify-icon className="text-base" icon="solar:chat-square-call-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
          Let’s talk
        </a>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-xl bg-white/5 p-2 ring-1 ring-white/10 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/8 hover:shadow-lg hover:shadow-indigo-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" id="menuBtn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-slate-950/80 backdrop-blur" id="mobileMenu">
<nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
<div className="grid gap-2">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#skills">Skills</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#projects">Projects</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#connect">Connect</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#contact">Contact</a>
</div>
</nav>
</div>
</header>
<main id="main">

<section className="relative" id="top">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid items-center gap-10 lg:grid-cols-12">
<div className="lg:col-span-7">
<p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Available for freelance &amp; remote work
            </p>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Hi, I'm Muhammad Haris
            </h1>
<p className="mt-3 text-base font-medium text-slate-200 sm:text-lg">
              WordPress Developer | Python Developer | GHL Expert
            </p>
<p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I build high-converting websites, reliable automations, and streamlined CRM funnels that help teams move faster.
              From WordPress builds and performance optimization to Python scripting and GoHighLevel workflows, I focus on clean execution, measurable results, and maintainable systems.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500/90 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 ring-1 ring-indigo-400/30 transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70" href="#projects">
<iconify-icon className="text-lg" icon="solar:folder-open-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                View Projects
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 ring-1 ring-white/10 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/8 hover:shadow-lg hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="#contact">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                Contact Me
              </a>
</div>
<dl className="mt-9 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 shadow-sm">
<dt className="text-xs font-semibold text-slate-300">Focus</dt>
<dd className="mt-1 text-sm font-semibold tracking-tight text-white">Speed &amp; conversions</dd>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 shadow-sm">
<dt className="text-xs font-semibold text-slate-300">Strength</dt>
<dd className="mt-1 text-sm font-semibold tracking-tight text-white">Automation &amp; systems</dd>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 shadow-sm">
<dt className="text-xs font-semibold text-slate-300">Delivery</dt>
<dd className="mt-1 text-sm font-semibold tracking-tight text-white">Clean, maintainable</dd>
</div>
</dl>
</div>

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/8 to-white/3 ring-1 ring-white/10 shadow-sm">
<div className="p-6 sm:p-7">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400/90"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-300/90"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90"></span>
</div>
<span className="text-xs font-semibold text-slate-300">Preview</span>
</div>
<div className="mt-6 grid gap-4">
<div className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-semibold text-slate-300">Website</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-white">Business landing + SEO</p>
<p className="mt-2 text-xs text-slate-300">Optimized performance, clean UI, analytics ready.</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-400/20">
<iconify-icon className="text-sm" icon="solar:bolt-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                        Fast
                      </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
</div>
</div>
<div className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-semibold text-slate-300">Automation</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-white">Python workflow scripts</p>
<p className="mt-2 text-xs text-slate-300">APIs, data handling, scheduled runs.</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
<iconify-icon className="text-sm" icon="solar:code-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                        Reliable
                      </span>
</div>
<div className="mt-4 grid grid-cols-4 gap-2">
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
</div>
</div>
<div className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-semibold text-slate-300">GHL</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-white">Funnels + CRM pipelines</p>
<p className="mt-2 text-xs text-slate-300">Automations, lead lifecycle, dashboards.</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-200 ring-1 ring-sky-400/20">
<iconify-icon className="text-sm" icon="solar:diagram-up-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                        Scalable
                      </span>
</div>
<div className="mt-4 grid grid-cols-5 gap-2">
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
<div className="h-2 rounded-full bg-white/10"></div>
</div>
</div>
</div>
</div>
<div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div aria-hidden="true" className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="about">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About</h2>
<p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
              Structured blocks below are ready for quick paste from your LinkedIn PDF export.
            </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 ring-1 ring-white/10 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/8 hover:shadow-lg hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" href="https://www.linkedin.com/in/muhammadharis-tech/" rel="noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:link-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
            View LinkedIn
          </a>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-12">
<article className="lg:col-span-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-sm">
<header className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Professional Summary</h3>
<p className="mt-1 text-xs font-medium text-slate-300">Paste your LinkedIn summary here</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-400/20">
<iconify-icon className="text-sm" icon="solar:user-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                Profile
              </span>
</header>
<div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
<p className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
<span className="font-semibold text-slate-200">[Paste LinkedIn “About” text]</span><br/>
                Example: Brief overview of WordPress development, Python automation, and GoHighLevel implementations with measurable impact.
              </p>
<ul className="grid gap-2 text-sm">
<li className="flex gap-2">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>Value proposition: faster delivery, clean builds, scalable automations.</span>
</li>
<li className="flex gap-2">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>Strengths: performance optimization, integrations, CRM workflows.</span>
</li>
<li className="flex gap-2">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>Outcomes: conversion-focused pages, automation-driven operations.</span>
</li>
</ul>
</div>
</article>
<article className="lg:col-span-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-sm">
<header className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Experience</h3>
<p className="mt-1 text-xs font-medium text-slate-300">Add roles exactly as in LinkedIn</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-200 ring-1 ring-sky-400/20">
<iconify-icon className="text-sm" icon="solar:case-minimalistic-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                Work
              </span>
</header>
<div className="mt-4 space-y-4">
<div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
<div className="flex flex-wrap items-start justify-between gap-2">
<div>
<p className="text-sm font-semibold tracking-tight text-white">[Job Title] — [Company]</p>
<p className="mt-1 text-xs font-medium text-slate-300">[Location] • [Start] – [End]</p>
</div>
<span className="text-xs font-semibold text-slate-300">[Employment type]</span>
</div>
<ul className="mt-3 grid gap-2 text-sm text-slate-300">
<li className="flex gap-2">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400/70"></span>
<span>[Paste bullet points from LinkedIn PDF]</span>
</li>
<li className="flex gap-2">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400/70"></span>
<span>[Key achievements, outcomes, tools used]</span>
</li>
</ul>
</div>
<div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
<div className="flex flex-wrap items-start justify-between gap-2">
<div>
<p className="text-sm font-semibold tracking-tight text-white">[Job Title] — [Company]</p>
<p className="mt-1 text-xs font-medium text-slate-300">[Location] • [Start] – [End]</p>
</div>
<span className="text-xs font-semibold text-slate-300">[Employment type]</span>
</div>
<ul className="mt-3 grid gap-2 text-sm text-slate-300">
<li className="flex gap-2">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400/70"></span>
<span>[Paste bullet points from LinkedIn PDF]</span>
</li>
<li className="flex gap-2">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400/70"></span>
<span>[Key achievements, outcomes, tools used]</span>
</li>
</ul>
</div>
</div>
</article>
<article className="lg:col-span-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-sm">
<header className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Certifications</h3>
<p className="mt-1 text-xs font-medium text-slate-300">Paste certifications from LinkedIn</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-200 ring-1 ring-amber-300/20">
<iconify-icon className="text-sm" icon="solar:medal-ribbon-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                Verified
              </span>
</header>
<div className="mt-4 space-y-3">
<div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
<p className="text-sm font-semibold tracking-tight text-white">[Certification Name]</p>
<p className="mt-1 text-xs text-slate-300">[Issuer] • [Date]</p>
<p className="mt-2 text-xs text-slate-300">[Credential ID / URL (optional)]</p>
</div>
<div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
<p className="text-sm font-semibold tracking-tight text-white">[Certification Name]</p>
<p className="mt-1 text-xs text-slate-300">[Issuer] • [Date]</p>
<p className="mt-2 text-xs text-slate-300">[Credential ID / URL (optional)]</p>
</div>
</div>
</article>
<article className="lg:col-span-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-sm">
<header className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Education</h3>
<p className="mt-1 text-xs font-medium text-slate-300">Paste education entries from LinkedIn</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
<iconify-icon className="text-sm" icon="solar:book-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
                Academics
              </span>
</header>
<div className="mt-4 space-y-3">
<div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
<p className="text-sm font-semibold tracking-tight text-white">[Degree] — [Institution]</p>
<p className="mt-1 text-xs text-slate-300">[Years] • [Location]</p>
<p className="mt-2 text-xs text-slate-300">[Notes / coursework / honors (optional)]</p>
</div>
<div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
<p className="text-sm font-semibold tracking-tight text-white">[Degree] — [Institution]</p>
<p className="mt-1 text-xs text-slate-300">[Years] • [Location]</p>
<p className="mt-2 text-xs text-slate-300">[Notes / coursework / honors (optional)]</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-white/10" id="skills">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Skills</h2>
<p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
              Core capabilities grouped by specialization.
            </p>
</div>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-3">

<article className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/6 hover:shadow-lg hover:shadow-black/30">
<header className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">WordPress Development</h3>
<p className="mt-1 text-xs font-medium text-slate-300">Build, optimize, scale</p>
</div>
</header></article></div></div></section></main>
    </>
  );
}
