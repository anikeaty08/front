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
      
<div className="flex min-h-screen flex-col">

<header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2" href="#home">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 text-sm font-semibold tracking-tight text-slate-950">
            UL
          </div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight text-slate-50">
              Uplyns
            </span>
<span className="text-xs font-medium text-slate-400">
              Digital Growth Studio
            </span>
</div>
</a>

<nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
<a className="transition hover:text-slate-50" href="#home">Home</a>
<a className="transition hover:text-slate-50" href="#about">About</a>
<a className="transition hover:text-slate-50" href="#services">Services</a>
<a className="transition hover:text-slate-50" href="#portfolio">Portfolio</a>
<a className="transition hover:text-slate-50" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden text-xs font-semibold text-slate-300 transition hover:text-slate-50 sm:inline" href="#portfolio">
            View Work
          </a>
<a className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/30 transition hover:bg-sky-400" href="#contact">
            Grow With Uplyns
          </a>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative border-b border-slate-800/60" id="home">

<div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center">
<div className="h-72 w-[36rem] rounded-full bg-sky-500/20 blur-3xl"></div>
</div>
<div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">

<div className="max-w-xl space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-slate-900/70 px-3 py-1 text-xs font-medium text-sky-100">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Growth-first digital agency for ambitious brands
            </div>
<div className="space-y-4">
<h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Build a digital presence <span className="text-sky-400">built to grow.</span>
</h1>
<p className="text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
                Uplyns designs modern, user-friendly websites and growth systems that make your brand seen, heard, and remembered. From strategy to launch, we turn clicks into customers.
              </p>
</div>

<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400" href="#contact">
                Grow With Uplyns
              </a>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-slate-50" href="#services">
                Explore Services
                <svg className="h-4 w-4 stroke-slate-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>

<div className="flex flex-wrap gap-6 pt-4 text-xs font-medium text-slate-300 sm:text-sm">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
<svg className="h-4 w-4 stroke-emerald-400" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7l-8 10-4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-xs font-semibold text-slate-50 sm:text-sm">Growth-driven strategy</p>
<p className="text-xs text-slate-400 sm:text-xs">Every design backed by data &amp; intent.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
<svg className="h-4 w-4 stroke-sky-400" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-xs font-semibold text-slate-50 sm:text-sm">Full-funnel execution</p>
<p className="text-xs text-slate-400 sm:text-xs">Web, SEO, social, and growth—aligned.</p>
</div>
</div>
</div>
</div>

<div className="relative mt-6 w-full max-w-md self-center lg:mt-0 lg:max-w-lg">
<div className="absolute inset-0 -translate-y-3 translate-x-4 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-emerald-400/20 to-purple-500/20 blur-3xl"></div>
<div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/60">

<div className="flex items-center justify-between border-b border-slate-800 pb-3">
<div>
<p className="text-xs font-medium text-slate-300">Growth overview</p>
<p className="text-sm font-semibold text-slate-50">Last 90 days</p>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1">
<svg className="h-3.5 w-3.5 stroke-emerald-400" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15l4-4 4 4 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs font-semibold text-emerald-300">+178%</span>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<p className="text-xs text-slate-400">Organic traffic</p>
<p className="mt-1 text-sm font-semibold text-slate-50">48.2k</p>
<p className="text-xs font-medium text-emerald-400">+132%</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<p className="text-xs text-slate-400">Lead conversion</p>
<p className="mt-1 text-sm font-semibold text-slate-50">4.8%</p>
<p className="text-xs font-medium text-emerald-400">+63%</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<p className="text-xs text-slate-400">Ad ROAS</p>
<p className="mt-1 text-sm font-semibold text-slate-50">3.4x</p>
<p className="text-xs font-medium text-emerald-400">+92%</p>
</div>
</div>

<div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Channel performance</span>
<span>Web • SEO • Social</span>
</div>
<div className="mt-3 flex h-24 items-end gap-1.5">
<div className="flex-1 rounded-t-md bg-sky-500/70" style={{height: '40%'}}></div>
<div className="flex-1 rounded-t-md bg-emerald-400/70" style={{height: '65%'}}></div>
<div className="flex-1 rounded-t-md bg-purple-500/70" style={{height: '30%'}}></div>
<div className="flex-1 rounded-t-md bg-sky-500" style={{height: '80%'}}></div>
<div className="flex-1 rounded-t-md bg-emerald-400" style={{height: '55%'}}></div>
<div className="flex-1 rounded-t-md bg-purple-500" style={{height: '70%'}}></div>
</div>
<div className="mt-3 flex items-center justify-between text-[0.65rem] text-slate-500">
<span>Before Uplyns</span>
<span>After Uplyns</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<div>
<p className="text-xs font-medium text-slate-300">
                    "Uplyns rebuilt our site and pipeline. We saw measurable growth in weeks."
                  </p>
<p className="mt-1 text-xs text-slate-500">Founder, DTC Brand</p>
</div>
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-slate-900 bg-slate-700"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-slate-600"></div>
<div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[0.6rem] font-semibold text-slate-200">
                    +18
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="about">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
<div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
<div className="space-y-5">
<p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                About Uplyns
              </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                A digital partner focused on outcomes, not just deliverables.
              </h2>
<p className="text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
                Uplyns exists to help brands show up with clarity, credibility, and momentum online. We combine sharp strategy, thoughtful design, and performance marketing so that every interaction moves your audience closer to becoming loyal customers.
              </p>
<p className="text-base font-medium leading-relaxed text-slate-400 sm:text-lg">
                We work best with teams that care about long-term impact. From early-stage startups to established businesses, we plug in as your digital growth partner—aligning your website, SEO, and social presence into one cohesive growth engine.
              </p>
<div className="grid gap-5 sm:grid-cols-3">
<div>
<p className="text-sm font-semibold text-slate-50">Strategy-first</p>
<p className="mt-1 text-sm text-slate-400">
                    Every project starts with understanding your business model, audience, and goals.
                  </p>
</div>
<div>
<p className="text-sm font-semibold text-slate-50">Conversion-minded</p>
<p className="mt-1 text-sm text-slate-400">
                    We design flows that reduce friction and turn attention into actions.
                  </p>
</div>
<div>
<p className="text-sm font-semibold text-slate-50">Built to scale</p>
<p className="mt-1 text-sm text-slate-400">
                    Flexible, modern stacks that support your next stage of growth.
                  </p>
</div>
</div>
</div>
<div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
<p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Why brands choose Uplyns
              </p>
<div className="space-y-3 text-sm text-slate-300">
<div className="flex gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<p>Clear, transparent communication throughout every phase of your project.</p>
</div>
<div className="flex gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<p>Conversion-focused UX and copy that speak to real customer needs.</p>
</div>
<div className="flex gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-purple-400"></span>
<p>Performance insights and reporting that show how your brand is growing.</p>
</div>
</div>
<div className="mt-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
<p className="text-sm font-semibold text-slate-50">
                  “Uplyns didn’t just give us a website. They gave us a digital engine that keeps compounding.”
                </p>
<p className="mt-2 text-xs text-slate-400">
                  Marketing Lead, B2B SaaS
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="services">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                Services
              </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Services designed to move the metrics that matter.
              </h2>
<p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
                From first impression to repeat purchase, Uplyns aligns web, search, and social to build a growth system tailored to your brand.
              </p>
</div>
<a className="mt-2 inline-flex items-center justify-center rounded-full border border-sky-500/40 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-sky-100 transition hover:border-sky-400 hover:text-sky-50" href="#contact">
              Plan your growth roadmap
            </a>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-2">

<div className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900">
<div className="flex items-center justify-between gap-3">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-200">
                    Web Design &amp; Experience
                  </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-50">
                    Modern websites built to convert, not just impress.
                  </h3>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10">
<svg className="h-5 w-5 stroke-sky-400" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="4"></rect>
<path d="M3 10h18" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm font-medium leading-relaxed text-slate-300">
                Uplyns crafts responsive, user-friendly websites that communicate your value clearly and guide visitors toward action, whether that’s a booking, purchase, or conversation.
              </p>
<ul className="mt-4 space-y-1.5 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>UX strategy &amp; wireframing for intuitive user flows.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Conversion-focused copy and clear messaging hierarchy.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Fast, mobile-first builds optimized for search &amp; speed.</span>
</li>
</ul>
<div className="mt-5 flex items-center justify-between text-xs text-slate-400">
<span>Ideal if your site feels outdated or underperforming.</span>
<button className="inline-flex items-center gap-1 text-xs font-semibold text-sky-300 hover:text-sky-200">
                  Discuss your website
                  <svg className="h-3.5 w-3.5 stroke-sky-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-slate-900">
<div className="flex items-center justify-between gap-3">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    SEO &amp; Visibility
                  </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-50">
                    Search strategies that bring the right people to you.
                  </h3>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
<svg className="h-5 w-5 stroke-emerald-400" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M16 16l4 4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm font-medium leading-relaxed text-slate-300">
                Uplyns builds SEO foundations that compound over time: technical health, content strategy, and on-page optimization that attract qualified organic traffic.
              </p>
<ul className="mt-4 space-y-1.5 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Technical audits to fix crawl, speed, and indexing issues.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Keyword and content strategy aligned with your ICP.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>On-page optimization and structured data for better rankings.</span>
</li>
</ul>
<div className="mt-5 flex items-center justify-between text-xs text-slate-400">
<span>Ideal if you rely on ads and want sustainable traffic.</span>
<button className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-emerald-200">
                  Review your SEO
                  <svg className="h-3.5 w-3.5 stroke-emerald-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-purple-500/60 hover:bg-slate-900">
<div className="flex items-center justify-between gap-3">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-200">
                    Social Media Marketing
                  </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-50">
                    Social presence that feels native, not forced.
                  </h3>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
<svg className="h-5 w-5 stroke-purple-400" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2H6a2 2 0 0 0-2 2v13.5A2.5 2.5 0 0 0 6.5 20h4.8l2.7 2.3a1 1 0 0 0 1.7-.76V20H18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm font-medium leading-relaxed text-slate-300">
                Uplyns turns your social channels into consistent brand touchpoints with content and campaigns that speak your customer’s language and drive measurable engagement.
              </p>
<ul className="mt-4 space-y-1.5 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-purple-400"></span>
<span>Channel strategy for the platforms that matter to your audience.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-purple-400"></span>
<span>Content calendars, creative direction, and ad campaign support.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-purple-400"></span>
<span>Performance tracking to see what drives reach and revenue.</span>
</li>
</ul>
<div className="mt-5 flex items-center justify-between text-xs text-slate-400">
<span>Ideal if posting feels random or inconsistent.</span>
<button className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 hover:text-purple-200">
                  Upgrade your social
                  <svg className="h-3.5 w-3.5 stroke-purple-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-slate-900">
<div className="flex items-center justify-between gap-3">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-100">
                    Digital Growth Strategy
                  </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-50">
                    A clear roadmap from where you are to where you want to go.
                  </h3>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10">
<svg className="h-5 w-5 stroke-amber-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h18v4H3z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 7v14M16 7v14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M3 13h18" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm font-medium leading-relaxed text-slate-300">
                Uplyns helps you prioritize the right digital moves, sequence them effectively, and measure the impact—so you’re not guessing where to invest next.
              </p>
<ul className="mt-4 space-y-1.5 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span>Deep-dive discovery into audience, funnel, and positioning.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span>90-day and 12-month digital growth roadmap.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span>Ongoing consulting or execution alongside your team.</span>
</li>
</ul>
<div className="mt-5 flex items-center justify-between text-xs text-slate-400">
<span>Ideal if your efforts feel busy but not aligned.</span>
<button className="inline-flex items-center gap-1 text-xs font-semibold text-amber-200 hover:text-amber-100">
                  Map your growth plan
                  <svg className="h-3.5 w-3.5 stroke-amber-200" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="portfolio">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                Portfolio
              </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Work that turns attention into momentum.
              </h2>
<p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
                A sample of how Uplyns has helped brands clarify their story, modernize their presence, and unlock new growth channels.
              </p>
</div>
<a className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-sky-200 hover:text-sky-100" href="#contact">
              Request full case studies
              <svg className="h-3.5 w-3.5 stroke-sky-200" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<article className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
<div className="relative overflow-hidden rounded-2xl bg-slate-900">
<div className="flex h-32 items-center justify-center bg-gradient-to-tr from-sky-500/20 via-slate-900 to-emerald-400/10">
<div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-center">
<p className="text-xs font-semibold text-slate-100">DTC Lifestyle Brand</p>
<p className="mt-1 text-xs text-slate-400">E-commerce redesign &amp; SEO lift</p>
</div>
</div>
</div>
<div className="mt-4 flex flex-1 flex-col">
<p className="text-sm font-semibold text-slate-50">E-commerce growth foundation</p>
<p className="mt-2 flex-1 text-sm text-slate-300">
                  Full website rebuild, technical SEO, and email capture strategy that turned a static brochure site into a revenue-generating storefront.
                </p>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-300">
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Revenue</p>
<p className="font-semibold text-emerald-300">+84%</p>
</div>
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Conversion</p>
<p className="font-semibold text-emerald-300">+41%</p>
</div>
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Bounce rate</p>
<p className="font-semibold text-emerald-300">-33%</p>
</div>
</div>
</div>
</article>

<article className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
<div className="relative overflow-hidden rounded-2xl bg-slate-900">
<div className="flex h-32 items-center justify-center bg-gradient-to-tr from-purple-500/20 via-slate-900 to-sky-400/10">
<div className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2 text-center">
<p className="text-xs font-semibold text-slate-100">B2B SaaS Platform</p>
<p className="mt-1 text-xs text-slate-400">Positioning, web, and content</p>
</div>
</div>
</div>
<div className="mt-4 flex flex-1 flex-col">
<p className="text-sm font-semibold text-slate-50">Pipeline-focused SaaS website</p>
<p className="mt-2 flex-1 text-sm text-slate-300">
                  Messaging overhaul, multi-page marketing site, and content strategy that aligned product story with buyer pain points.
                </p>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-300">
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Demo requests</p>
<p className="font-semibold text-emerald-300">+129%</p>
</div>
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Time on site</p>
<p className="font-semibold text-emerald-300">+52%</p>
</div>
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Organic signups</p>
<p className="font-semibold text-emerald-300">+73%</p>
</div>
</div>
</div>
</article>

<article className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
<div className="relative overflow-hidden rounded-2xl bg-slate-900">
<div className="flex h-32 items-center justify-center bg-gradient-to-tr from-emerald-400/20 via-slate-900 to-amber-400/10">
<div className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2 text-center">
<p className="text-xs font-semibold text-slate-100">Professional Services</p>
<p className="mt-1 text-xs text-slate-400">Local SEO &amp; social presence</p>
</div>
</div>
</div>
<div className="mt-4 flex flex-1 flex-col">
<p className="text-sm font-semibold text-slate-50">Local authority &amp; lead engine</p>
<p className="mt-2 flex-1 text-sm text-slate-300">
                  Location-focused SEO, reputation management, and social campaigns that made the brand the obvious choice in their market.
                </p>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-300">
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Local leads</p>
<p className="font-semibold text-emerald-300">+96%</p>
</div>
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Profile views</p>
<p className="font-semibold text-emerald-300">+211%</p>
</div>
<div className="rounded-xl bg-slate-950/80 p-2">
<p className="text-[0.7rem] text-slate-400">Review score</p>
<p className="font-semibold text-emerald-300">4.9★</p>
</div>
</div>
</div>
</article>
</div>
<div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400">
<p>Every engagement starts with understanding your baseline and defining measurable success.</p>
<a className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/30 transition hover:bg-sky-400" href="#contact">
              Start a project with Uplyns
            </a>
</div>
</div>
</section>

<section className="bg-slate-950" id="contact">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
<div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-start">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                Contact
              </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Ready to build a digital presence that grows with you?
              </h2>
<p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
                Share a bit about your brand, timeline, and goals. Uplyns will respond with next steps, recommended approach, and transparent pricing options.
              </p>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
<p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
                    Typical projects
                  </p>
<p className="mt-2 text-sm font-semibold text-slate-50">4–12 weeks</p>
<p className="mt-1 text-xs text-slate-400">Depending on scope &amp; speed.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
<p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
                    Ideal for
                  </p>
<p className="mt-2 text-sm font-semibold text-slate-50">Growth-focused teams</p>
<p className="mt-1 text-xs text-slate-400">Who want clarity and momentum.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
<p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
                    Next step
                  </p>
<p className="mt-2 text-sm font-semibold text-slate-50">15-minute fit call</p>
<p className="mt-1 text-xs text-slate-400">No pressure, just clarity.</p>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
<form className="space-y-4">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-200" htmlFor="name">Full name</label>
<input autocomplete="name" className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" id="name" name="name" placeholder="Alex Johnson" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-200" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" id="email" name="email" placeholder="you@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-200" htmlFor="company">Company</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" id="company" name="company" placeholder="Brand or business name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-200" htmlFor="services-select">What are you interested in?</label>
<select className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" id="services-select" name="services">
<option className="bg-slate-950 text-slate-200">Web Design &amp; Experience</option>
<option className="bg-slate-950 text-slate-200">SEO &amp; Visibility</option>
<option className="bg-slate-950 text-slate-200">Social Media Marketing</option>
<option className="bg-slate-950 text-slate-200">Digital Growth Strategy</option>
<option className="bg-slate-950 text-slate-200">A combination of the above</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-200" htmlFor="budget">Estimated monthly or project budget</label>
<select className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" id="budget" name="budget">
<option className="bg-slate-950 text-slate-200">Exploring options</option>
<option className="bg-slate-950 text-slate-200">$3k – $7k</option>
<option className="bg-slate-950 text-slate-200">$7k – $15k</option>
<option className="bg-slate-950 text-slate-200">$15k+</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-200" htmlFor="message">Tell us about your brand &amp; goals</label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" id="message" name="message" placeholder="Where are you today, and what does success look like in 6–12 months?" rows="4"></textarea>
</div>
<div className="flex flex-wrap items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400" type="submit">
                    Grow With Uplyns
                  </button>
<p className="text-[0.7rem] text-slate-500">
                    We typically respond within one business day.
                  </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold tracking-tight text-slate-50">
                UL
              </div>
<span className="text-sm font-semibold tracking-tight text-slate-100">
                Uplyns
              </span>
</div>
<p className="max-w-md text-xs text-slate-400">
              Uplyns is a digital agency helping brands grow with modern web design, SEO, social media marketing, and digital growth strategies.
            </p>
</div>
<div className="flex flex-col items-start gap-3 text-xs text-slate-400 sm:items-end">
<div className="flex gap-4">
<a className="hover:text-slate-200" href="#services">Services</a>
<a className="hover:text-slate-200" href="#portfolio">Work</a>
<a className="hover:text-slate-200" href="#contact">Start a project</a>
</div>
<p>© <span id="year"></span> Uplyns. All rights reserved.</p>
</div>
</div>
</div>

</footer>
</div>

    </>
  );
}
