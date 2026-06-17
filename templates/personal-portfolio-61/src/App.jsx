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



// Theme + language persistence
document.documentElement.classList.toggle(
'dark',
localStorage.theme === 'dark' ||
(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);



    const themeToggle = document.getElementById('themeToggle');
    const themeThumb = document.getElementById('themeThumb');

    themeToggle?.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
    });

    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');
    const altLangLabel = document.getElementById('altLangLabel');
    let currentLang = 'EN';

    langToggle?.addEventListener('click', () => {
      currentLang = currentLang === 'EN' ? 'VI' : 'EN';
      langLabel.textContent = currentLang;
      altLangLabel.textContent = currentLang === 'EN' ? 'VI' : 'EN';
      // Hook up a real i18n system here if needed
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
      
<div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">

<div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.24),_transparent_55%)]"></div>
<div className="pointer-events-none fixed inset-0 z-0 border border-slate-800/80"></div>

<header className="relative z-20 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">

<a className="inline-flex items-center gap-2" href="#top">
<div className="rounded-full bg-sky-500/10 px-3 py-1">
<span className="text-sm font-semibold tracking-[0.18em] text-sky-400">TN</span>
</div>
<span className="hidden sm:inline text-sm font-medium text-slate-200 tracking-tight">Frank Blog</span>
</a>

<nav className="hidden sm:flex text-sm font-medium text-slate-300 gap-x-6 gap-y-6 items-center">
<a className="transition hover:text-sky-300" href="#about">About</a>
<a className="transition hover:text-sky-300" href="#experience">Experience</a>
<a className="transition hover:text-sky-300" href="#blog">Blog</a>
<a className="transition hover:text-sky-300" href="#projects">Portfolio</a>
<a className="transition hover:text-sky-300" href="#contact">Contact</a>
<a className="rounded-full bg-sky-500/10 px-3 py-1 text-sky-300 transition hover:bg-sky-500/20 hover:text-sky-100" href="#support">
            Support
          </a>
</nav>

<div className="flex items-center gap-2 sm:gap-3">

<button className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm transition hover:border-slate-500 hover:text-slate-100" id="langToggle" type="button">
<span id="langLabel">EN</span>
<span className="text-slate-500">/</span>
<span className="text-slate-500" id="altLangLabel">VI</span>
</button>

<button aria-label="Toggle dark mode" className="relative inline-flex h-7 w-12 items-center rounded-full border border-slate-700 bg-slate-900/80 p-0.5 shadow-inner transition" id="themeToggle" type="button">
<span className="pointer-events-none absolute inset-y-0 left-1 flex items-center justify-center">

<svg className="h-3.5 w-3.5 text-amber-300 dark:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M17.99 17.99l1.77 1.77M2 12h2.5M19.5 12H22M4.22 19.78l1.77-1.77M17.99 6.01l1.77-1.77"></path>
</svg>
</span>
<span className="pointer-events-none absolute inset-y-0 right-1 hidden items-center justify-center dark:flex">

<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z"></path>
</svg>
</span>
<span className="relative z-10 h-5 w-5 translate-x-0 rounded-full bg-slate-100 shadow-sm ring-1 ring-slate-300 transition-transform dark:translate-x-5 dark:bg-slate-900 dark:ring-slate-600" id="themeThumb"></span>
</button>
</div>
</div>
</header>

<main className="flex-1 z-10 relative" id="top">
<div className="flex flex-col gap-16 sm:px-6 lg:px-8 lg:py-14 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 gap-x-16 gap-y-16">

<section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center gap-x-10 gap-y-10" id="about">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="tracking-tight">Available for collaborations &amp; remote roles</span>
</div>
<div className="space-y-3">
<h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                Product-minded engineer, writer, and lifelong learner.
              </h1>
<p className="leading-relaxed text-base text-slate-300">
                I design and build web experiences that feel invisible: fast, reliable, and kind to the people who use them. I care about clear writing, thoughtful systems, and products that respect privacy.
              </p>
</div>
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4 items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400" href="#contact">
                Contact me
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 transition hover:border-sky-400 hover:text-sky-100 text-sm font-medium text-sky-300 bg-slate-950/60 border-sky-500/50 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#support">
                Support my work
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 5H5"></path>
<path d="M21 12H3"></path>
<path d="M19 19H5"></path>
</svg>
</a>
<div className="inline-flex items-center gap-3 text-xs text-slate-400">
<div className="flex -space-x-1.5">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-[0.6rem] font-semibold text-sky-200">A</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-[0.6rem] font-semibold text-emerald-200">B</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-[0.6rem] font-semibold text-violet-200">C</span>
</div>
<span className="">Trusted by folks at privacy-first and devtool companies.</span>
</div>
</div>
<div className="flex flex-wrap gap-3 text-xs text-slate-300">
<span className="rounded-full bg-slate-900/80 px-3 py-1">TypeScript</span>
<span className="rounded-full bg-slate-900/80 px-3 py-1">React / Next</span>
<span className="rounded-full bg-slate-900/80 px-3 py-1">Node / Edge</span>
<span className="rounded-full bg-slate-900/80 px-3 py-1">Technical Writing</span>
<span className="rounded-full bg-slate-900/80 px-3 py-1">Product Strategy</span>
</div>
</div>

<aside className="space-y-4 md:justify-self-end">
<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-black/40">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_80%_120%,_rgba(129,140,248,0.35),_transparent_55%)] opacity-70"></div>
<div className="relative p-5">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-full border border-slate-600 bg-slate-900/90 shadow-inner"></div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50">Your Name</p>
<p className="text-xs text-slate-300">Full-stack Engineer · Writer</p>
<p className="mt-1 text-xs text-slate-400">Ho Chi Minh City, Vietnam</p>
</div>
</div>
<div className="mt-4 space-y-3 text-xs text-slate-200">
<p className="">
                    Building tools for developers and teams, with a focus on performance, accessibility, and calm UX.
                  </p>
<div className="flex flex-wrap gap-2 text-[0.7rem]">
<span className="rounded-full bg-slate-950/60 px-2 py-1 text-slate-300">Remote-friendly</span>
<span className="rounded-full bg-slate-950/60 px-2 py-1 text-slate-300">English / Vietnamese</span>
<span className="rounded-full bg-slate-950/60 px-2 py-1 text-emerald-300">Open to mentoring</span>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4 text-center">
<div className="">
<p className="text-sm font-semibold text-slate-50">7+</p>
<p className="mt-0.5 text-[0.65rem] text-slate-400">years in web</p>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-50">23</p>
<p className="mt-0.5 text-[0.65rem] text-slate-400">projects shipped</p>
</div>
<div>
<p className="text-sm font-semibold text-slate-50">4</p>
<p className="mt-0.5 text-[0.65rem] text-slate-400">countries worked</p>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-300">
<div className="space-y-1">
<p className="font-medium tracking-tight text-slate-100">Currently</p>
<p>Helping teams modernize their frontends &amp; improve DX.</p>
</div>
<div className="flex flex-wrap gap-2">
<a className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 transition hover:bg-slate-800" href="mailto:you@example.com">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
                  Email
                </a>
<a className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-slate-100" href="https://github.com/" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a3.6 3.6 0 0 0-1-2.6c3 -.3 6.2-1.5 6.2-6.8A5.4 5.4 0 0 0 19.5 4.6 5.07 5.07 0 0 0 19.4 1S18.2.7 15 2.6a13.38 13.38 0 0 0-6 0C5.8.7 4.6 1 4.6 1a5.07 5.07 0 0 0-.1 3.6A5.4 5.4 0 0 0 3 8.6c0 5.2 3.2 6.5 6.2 6.8A3.6 3.6 0 0 0 8 18v4"></path>
<path d="M9 18c-4 1.5-4-2-6-2"></path>
</svg>
                  GitHub
                </a>
<a className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-slate-100" href="https://linkedin.com/" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
                  LinkedIn
                </a>
</div>
</div>
</aside>
</section>

<section className="space-y-6" id="experience">
<div className="flex flex-wrap items-end justify-between gap-3">
<div className="">
<h2 className="text-2xl font-semibold text-slate-50 tracking-tight">Experience</h2>
<p className="mt-1 text-base text-slate-300">A snapshot of roles, projects, and what I actually did.</p>
</div>
<span className="text-xs text-slate-400">Selected · 2017 — Present</span>
</div>
<div className="grid gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">

<div className="space-y-4">

<article className="relative flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="relative flex shrink-0 flex-col items-center">
<div className="mt-1 h-2 w-2 rounded-full bg-sky-400 ring-4 ring-sky-500/20"></div>
<div className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-sky-500/40 to-slate-800"></div>
</div>
<div className="space-y-1">
<div className="flex flex-wrap items-center justify-between gap-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Senior Frontend Engineer</h3>
<span className="text-[0.7rem] text-slate-400">2022 — Present</span>
</div>
<p className="text-xs text-slate-300">Remote · SaaS Analytics</p>
<p className="mt-2 text-base text-slate-300">
                    Led the migration of a legacy dashboard to a modern React stack, improving median page load times by 40% and boosting trial conversion by 12%.
                  </p>
<ul className="mt-2 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
<li className="rounded-full bg-slate-900/80 px-2 py-1">React</li>
<li className="rounded-full bg-slate-900/80 px-2 py-1">TypeScript</li>
<li className="rounded-full bg-slate-900/80 px-2 py-1">Design Systems</li>
</ul>
</div>
</article>
<article className="relative flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="relative flex shrink-0 flex-col items-center">
<div className="mt-1 h-2 w-2 rounded-full bg-sky-400 ring-4 ring-sky-500/20"></div>
<div className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-sky-500/40 to-slate-800"></div>
</div>
<div className="space-y-1">
<div className="flex flex-wrap items-center justify-between gap-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Full-stack Engineer</h3>
<span className="text-[0.7rem] text-slate-400">2019 — 2022</span>
</div>
<p className="text-xs text-slate-300">Product Studio</p>
<p className="mt-2 text-base text-slate-300">
                    Shipped production features across marketing sites, billing, and onboarding flows for multiple clients, often from fuzzy briefs to measurable outcomes.
                  </p>
<ul className="mt-2 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
<li className="rounded-full bg-slate-900/80 px-2 py-1">Next.js</li>
<li className="rounded-full bg-slate-900/80 px-2 py-1">Node</li>
<li className="rounded-full bg-slate-900/80 px-2 py-1">PostgreSQL</li>
</ul>
</div>
</article>
<article className="relative flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="relative flex shrink-0 flex-col items-center">
<div className="mt-1 h-2 w-2 rounded-full bg-slate-600 ring-4 ring-slate-700/60"></div>
</div>
<div className="space-y-1">
<div className="flex flex-wrap items-center justify-between gap-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Frontend Engineer</h3>
<span className="text-[0.7rem] text-slate-400">2017 — 2019</span>
</div>
<p className="text-xs text-slate-300">Agency · Education &amp; Media</p>
<p className="mt-2 text-base text-slate-300">
                    Built content-heavy sites for media and education brands, learning how to ship quickly without sacrificing accessibility.
                  </p>
</div>
</article>
</div>

<aside className="space-y-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Technical focus</h3>
<p className="mt-2 text-base text-slate-300">
                  I work across the stack, with a bias toward frontend, product thinking, and developer experience.
                </p>
<dl className="mt-4 space-y-3 text-xs text-slate-300">
<div className="flex items-center justify-between">
<dt>Frontend engineering</dt>
<dd className="text-slate-100">Advanced</dd>
</div>
<div className="flex items-center justify-between">
<dt>Backend &amp; infra</dt>
<dd className="text-slate-100">Comfortable</dd>
</div>
<div className="flex items-center justify-between">
<dt>Technical writing</dt>
<dd className="text-slate-100">Advanced</dd>
</div>
<div className="flex items-center justify-between">
<dt>Mentoring &amp; leadership</dt>
<dd className="text-slate-100">Growing</dd>
</div>
</dl>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Toolbox</h3>
<div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300">
<span className="rounded-lg bg-slate-900/80 px-2 py-1">React / Next</span>
<span className="rounded-lg bg-slate-900/80 px-2 py-1">TypeScript</span>
<span className="rounded-lg bg-slate-900/80 px-2 py-1">Node / Express</span>
<span className="rounded-lg bg-slate-900/80 px-2 py-1">PostgreSQL</span>
<span className="rounded-lg bg-slate-900/80 px-2 py-1">Redis</span>
<span className="rounded-lg bg-slate-900/80 px-2 py-1">Playwright</span>
</div>
</div>
</aside>
</div>
</section>

<section className="space-y-6" id="projects">
<div className="flex flex-wrap items-end justify-between gap-3">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50">Selected projects</h2>
<p className="mt-1 text-base text-slate-300">Case studies I’m proud of.</p>
</div>
<a className="text-xs font-medium text-sky-300 hover:text-sky-200" href="#">View full portfolio</a>
</div>
<div className="grid gap-5 md:grid-cols-3">

<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 transition hover:border-sky-500/60 hover:bg-slate-950">
<div className="relative h-32 overflow-hidden bg-slate-900">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-slate-900 to-violet-500/30"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-slate-100">
<span className="rounded-full bg-slate-950/80 px-2 py-1">Analytics</span>
<span className="rounded-full bg-slate-950/80 px-2 py-1">B2B</span>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Realtime metrics dashboard</h3>
<p className="mt-2 text-base text-slate-300">
                  Designed and shipped a realtime metrics experience with sub-second updates and keyboard-first navigation.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
<span className="rounded-full bg-slate-900/80 px-2 py-1">React</span>
<span className="rounded-full bg-slate-900/80 px-2 py-1">WebSockets</span>
<span className="rounded-full bg-slate-900/80 px-2 py-1">Performance</span>
</div>
</div>
</article>
<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 transition hover:border-sky-500/60 hover:bg-slate-950">
<div className="relative h-32 overflow-hidden bg-slate-900">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-slate-900 to-sky-500/30"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-slate-100">
<span className="rounded-full bg-slate-950/80 px-2 py-1">Open Source</span>
<span className="rounded-full bg-slate-950/80 px-2 py-1">DX</span>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Developer tooling library</h3>
<p className="mt-2 text-base text-slate-300">
                  Built a small suite of utilities that simplify logging, feature flags, and environment management.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
<span className="rounded-full bg-slate-900/80 px-2 py-1">TypeScript</span>
<span className="rounded-full bg-slate-900/80 px-2 py-1">CLI</span>
</div>
</div>
</article>
<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 transition hover:border-sky-500/60 hover:bg-slate-950">
<div className="relative h-32 overflow-hidden bg-slate-900">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-slate-900 to-sky-500/30"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-slate-100">
<span className="rounded-full bg-slate-950/80 px-2 py-1">Writing</span>
<span className="rounded-full bg-slate-950/80 px-2 py-1">Education</span>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Frontend learning path</h3>
<p className="mt-2 text-base text-slate-300">
                  Curated and wrote a beginner-friendly roadmap to modern web development focused on fundamentals.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
<span className="rounded-full bg-slate-900/80 px-2 py-1">Teaching</span>
<span className="rounded-full bg-slate-900/80 px-2 py-1">Content</span>
</div>
</div>
</article>
</div>
</section>

<section className="space-y-6" id="blog">
<div className="flex flex-wrap items-end justify-between gap-3">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50">Blog</h2>
<p className="mt-1 text-base text-slate-300">Notes on engineering, product, and learning in public.</p>
</div>
<a className="text-xs font-medium text-sky-300 hover:text-sky-200" href="#">View all posts</a>
</div>
<div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">

<article className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-sky-500/60">
<div className="space-y-2">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-300">Featured</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  Designing interfaces that stay fast at scale
                </h3>
<p className="text-base text-slate-300">
                  Practical strategies I use to keep complex dashboards responsive, even as data and features grow.
                </p>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
<div className="flex flex-wrap items-center gap-3">
<span>12 min read</span>
<span>Performance · UX · React</span>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-sky-200 transition group-hover:bg-sky-500 group-hover:text-slate-950">
                  Read post
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</article>

<div className="space-y-3">
<article className="flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 transition hover:border-sky-500/60">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">A calmer stack for personal projects</h3>
<p className="mt-1 text-base text-slate-300">
                    How I choose tools with an eye toward maintenance, not hype.
                  </p>
</div>
<span className="shrink-0 text-[0.7rem] text-slate-400">6 min</span>
</article>
<article className="flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 transition hover:border-sky-500/60">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Notes on writing better technical docs</h3>
<p className="mt-1 text-base text-slate-300">
                    Lessons from shipping documentation for complex features.
                  </p>
</div>
<span className="shrink-0 text-[0.7rem] text-slate-400">8 min</span>
</article>
<article className="flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 transition hover:border-sky-500/60">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Intentional career shaping as an engineer</h3>
<p className="mt-1 text-base text-slate-300">
                    How I think about skills, leverage, and direction as a generalist.
                  </p>
</div>
<span className="shrink-0 text-[0.7rem] text-slate-400">11 min</span>
</article>
</div>
</div>
</section>

<section className="grid gap-5 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="flex flex-wrap items-center justify-between gap-2">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50">Stay in the loop</h2>
<p className="mt-1 text-base text-slate-300">
                  Occasional emails about building products, writing, and working from Vietnam.
                </p>
</div>
<span className="text-[0.7rem] text-emerald-300">No spam. Unsubscribe anytime.</span>
</div>
<form className="mt-4 flex flex-col gap-3 sm:flex-row">
<label className="w-full text-xs text-slate-200">
<span className="sr-only">Email</span>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="you@example.com" required="" type="email"/>
</label>
<button className="inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 sm:w-auto" type="submit">
                Join newsletter
              </button>
</form>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Privacy-friendly analytics</h3>
<p className="mt-2 text-base text-slate-300">
              I use lightweight, cookie-free analytics to understand which pages are useful and what to improve. No tracking pixels, no cross-site identifiers.
            </p>
<div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
<div className="rounded-xl bg-slate-900/80 p-2">
<p className="text-sm font-semibold text-slate-50">Anonymous</p>
<p className="mt-1 text-[0.7rem] text-slate-400">no personal data</p>
</div>
<div className="rounded-xl bg-slate-900/80 p-2">
<p className="text-sm font-semibold text-slate-50">Lightweight</p>
<p className="mt-1 text-[0.7rem] text-slate-400">&lt; 1kb script</p>
</div>
<div className="rounded-xl bg-slate-900/80 p-2">
<p className="text-sm font-semibold text-slate-50">Opt-out</p>
<p className="mt-1 text-[0.7rem] text-slate-400">respect Do Not Track</p>
</div>
</div>
</div>
</section>

<section className="grid gap-5 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]" id="contact">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50">Contact</h2>
<p className="mt-1 text-base text-slate-300">
              Whether you’re exploring a project, a role, or just want to say hi, I’d love to hear from you.
            </p>
<form className="mt-4 space-y-3">
<div className="grid gap-3 sm:grid-cols-2">
<label className="text-xs text-slate-200">
                  Name
                  <input className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Your name" required="" type="text"/>
</label>
<label className="text-xs text-slate-200">
                  Email
                  <input className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="you@example.com" required="" type="email"/>
</label>
</div>
<label className="text-xs text-slate-200">
                How can I help?
                <select className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
<option>Project / consulting</option>
<option>Full-time role</option>
<option>Mentorship / coffee chat</option>
<option>Something else</option>
</select>
</label>
<label className="text-xs text-slate-200">
                Message
                <textarea className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Share a bit about what you’re looking for, timeline, and any relevant links." rows="4"></textarea>
</label>
<div className="flex flex-wrap items-center justify-between gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400" type="submit">
                  Send message
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2 11 13"></path>
<path d="M22 2 15 22 11 13 2 9 22 2"></path>
</svg>
</button>
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
<a className="inline-flex items-center gap-1 hover:text-sky-300" href="mailto:you@example.com">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
                    you@example.com
                  </a>
<a className="inline-flex items-center gap-1 hover:text-sky-300" href="https://twitter.com/" target="_blank">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3l-3 7-4 4-2 7"></path>
<path d="M14 9l-2 11"></path>
</svg>
                    @yourhandle
                  </a>
</div>
</div>
</form>
</div>

<aside className="space-y-4" id="support">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50">Support my work</h2>
<p className="mt-1 text-base text-slate-300">
                If you’ve found my articles, libraries, or open source work useful, you can help keep it sustainable.
              </p>
<form action="https://www.paypal.com/donate" className="mt-3 space-y-3" method="post" target="_blank">

<input name="hosted_button_id" type="hidden" value="YOUR_PAYPAL_BUTTON_ID"/>
<label className="text-xs text-slate-200">
                  Suggested amount
                  <div className="mt-1 flex gap-2">
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500" min="1" name="amount" placeholder="5" step="1" type="number"/>
<div className="flex items-center rounded-xl border border-slate-700 bg-slate-950/80 px-3 text-sm text-slate-200">
                      USD
                    </div>
</div>
</label>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold tracking-tight text-slate-900 shadow-lg shadow-amber-400/30 transition hover:bg-amber-300" type="submit">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C12 21 4 14.5 4 9.5C4 6.46243 6.23858 4 9 4C10.6579 4 12 4.85767 12 4.85767C12 4.85767 13.3421 4 15 4C17.7614 4 20 6.46243 20 9.5C20 14.5 12 21 12 21Z"></path>
</svg>
                  Support via PayPal
                </button>
<p className="text-[0.7rem] text-slate-400">
                  Funds go toward hosting, open source maintenance, and time spent writing in-depth guides.
                </p>
</form>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-300">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Multilingual</h3>
<p className="mt-1 text-base text-slate-300">
                I publish in both English and Vietnamese. A subset of posts are translated manually to keep nuance.
              </p>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-slate-900/80 p-2">
<p className="text-[0.7rem] text-slate-400">English</p>
<p className="text-sm font-semibold text-slate-50">Deep technical dives</p>
</div>
<div className="rounded-xl bg-slate-900/80 p-2">
<p className="text-[0.7rem] text-slate-400">Tiếng Việt</p>
<p className="text-sm font-semibold text-slate-50">Hướng dẫn thân thiện</p>
</div>
</div>
</div>
</aside>
</section>
</div>
</main>

<footer className="relative z-10 border-t border-slate-800/70 bg-slate-950/80">
<div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<span className="rounded-full bg-sky-500/10 px-2 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-sky-400">TN</span>
<span>© <span id="year">2025</span> Your Name. All rights reserved.</span>
</div>
<div className="flex flex-wrap items-center gap-3">
<span className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Open for interesting problems.
          </span>
</div>
</div>
</footer>
</div>



    </>
  );
}
