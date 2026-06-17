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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-[140px]"></div>
<div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[120px]"></div>
</div>

<div className="relative">

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition">
<span className="text-[11px] font-semibold tracking-tight text-white">NW</span>
</div>
<span className="text-sm md:text-base font-medium tracking-tight text-white/90 group-hover:text-white transition">NovaWorks</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#projects">Projects</a>
<a className="hover:text-white transition" href="#achievements">Achievements</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white/5 px-3.5 py-2 text-sm font-medium text-white hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" href="#projects">
<span>Explore</span>

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-3.5 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:ring-offset-0 transition" href="#contact">
<span>Get in touch</span>

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
</svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-16 sm:py-20 lg:py-28">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 mb-6">

<svg className="h-3.5 w-3.5 text-amber-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.9 5.7L20 10l-6.1 1.3L12 17l-1.9-5.7L4 10l6.1-1.3L12 3z"></path>
</svg>
<span>Engineering beautiful products</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
                We design, build, and scale next‑gen software.
              </h1>
<p className="mt-5 max-w-2xl text-slate-300 text-base sm:text-lg">
                From fast MVPs to enterprise platforms, our team delivers clean code, thoughtful UX, and measurable outcomes.
              </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-semibold hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/40 transition" href="#projects">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15a7 7 0 0 0 4 4"></path>
<path d="M15 9l-6 6"></path>
<path d="M18 5c-1.7 0-3.9.7-5.5 2.3L5 15l4 4 7.7-7.5C18.3 9.9 19 7.7 19 6z"></path>
<path d="M15 9l6 6"></path>
</svg>
<span>Explore projects</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" href="#about">

<svg className="h-4.5 w-4.5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<span>About us</span>
</a>
</div>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">

<svg className="h-5 w-5 text-cyan-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" width="6" x="9" y="9"></rect>
<path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"></path>
</svg>
<div>
<div className="text-sm font-medium text-white">AI-first</div>
<div className="text-xs text-slate-400">ML, GenAI, agents</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">

<svg className="h-5 w-5 text-indigo-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 9 5-9 5-9-5 9-5z"></path>
<path d="m3 12 9 5 9-5"></path>
<path d="m3 17 9 5 9-5"></path>
</svg>
<div>
<div className="text-sm font-medium text-white">Full‑stack</div>
<div className="text-xs text-slate-400">Cloud to pixel</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">

<svg className="h-5 w-5 text-emerald-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<div>
<div className="text-sm font-medium text-white">Secure</div>
<div className="text-xs text-slate-400">Privacy by design</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">

<svg className="h-5 w-5 text-yellow-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"></path>
</svg>
<div>
<div className="text-sm font-medium text-white">Ship fast</div>
<div className="text-xs text-slate-400">Weekly releases</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative h-[320px] sm:h-[420px] lg:h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 overflow-hidden">
<img alt="Futuristic 3D render" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 h-full w-full rounded-xl bg-black/30 backdrop-blur-sm p-4 sm:p-6 flex flex-col justify-end">
<div className="grid grid-cols-3 gap-2 sm:gap-3">

<div className="col-span-3 rounded-lg border border-white/10 bg-black/40 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-cyan-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
<span className="text-xs font-medium text-slate-200">build.ts</span>
</div>

<svg className="h-4 w-4 text-emerald-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
<pre className="mt-2 text-[11px] leading-5 text-slate-300 font-[family:var(--font-mono)]" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
// api/ai.ts
export async function generatePlan(input) {
  const steps = await ai.plan({
    goal: input,
    constraints: ['time', 'budget'],
  })
  return steps.slice(0, 5)
}
                      </pre>
</div>

<div className="rounded-lg border border-white/10 bg-black/40 p-3">
<div className="text-[10px] uppercase tracking-wide text-slate-400">Uptime</div>
<div className="mt-1 text-lg font-semibold text-white tracking-tight">99.98%</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/40 p-3">
<div className="text-[10px] uppercase tracking-wide text-slate-400">Latency</div>
<div className="mt-1 text-lg font-semibold text-white tracking-tight">58 ms</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/40 p-3">
<div className="text-[10px] uppercase tracking-wide text-slate-400">Users</div>
<div className="mt-1 text-lg font-semibold text-white tracking-tight">120k</div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-slate-400">A peek into our build pipeline and live metrics dashboard.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 mb-5">

<svg className="h-3.5 w-3.5 text-indigo-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21h18"></path>
<path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14"></path>
<path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6"></path>
</svg>
<span>About NovaWorks</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Purpose‑built teams. Outcomes over output.</h2>
<p className="mt-4 text-slate-300">
                  We’re a distributed studio of engineers, designers, and product strategists. We partner with founders and enterprises to ship delightful, scalable software.
                </p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3">

<svg className="h-5 w-5 text-emerald-300/90 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14v8"></path><path d="M12 2v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path>
<circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
</svg>
<div>
<div className="text-sm font-medium text-white">Strategy to Ship</div>
<p className="text-sm text-slate-400">Discovery, roadmaps, and execution with weekly demos.</p>
</div>
</div>
<div className="flex items-start gap-3">

<svg className="h-5 w-5 text-cyan-300/90 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<div>
<div className="text-sm font-medium text-white">Compliance ready</div>
<p className="text-sm text-slate-400">SOC2, HIPAA, GDPR workflows baked in from day one.</p>
</div>
</div>
<div className="flex items-start gap-3">

<svg className="h-5 w-5 text-indigo-300/90 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
<div>
<div className="text-sm font-medium text-white">Remote native</div>
<p className="text-sm text-slate-400">Follow‑the‑sun development with 24/7 coverage.</p>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Client" className="h-8 w-8 rounded-full ring-1 ring-white/10 -ml-2" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Client" className="h-8 w-8 rounded-full ring-1 ring-white/10 -ml-2" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="text-xs text-slate-400">Trusted by product teams in fintech, health, and AI.</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-12 gap-4">
<div className="col-span-12 sm:col-span-7 rounded-xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Team at work" className="h-56 sm:h-72 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-sm font-medium text-white">Human‑centered design</div>
<p className="text-sm text-slate-400 mt-1">We prototype in days, validate with users, and iterate fast.</p>
</div>
</div>
<div className="col-span-12 sm:col-span-5 grid gap-4">
<div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Pair programming" className="h-40 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-sm font-medium text-white">Engineering excellence</div>
<p className="text-sm text-slate-400 mt-1">Typesafe, tested, and observability by default.</p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Product planning" className="h-40 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-sm font-medium text-white">Outcome driven</div>
<p className="text-sm text-slate-400 mt-1">KPIs, not vanity metrics. We align on impact.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="projects">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Selected projects</h2>
<p className="mt-2 text-slate-300">A snapshot of what we’ve shipped for ambitious teams.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white/5 px-3.5 py-2 text-sm font-medium text-white hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" href="#contact">
<span>Start a project</span>

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] transition">
<div className="relative">
<img alt="Realtime analytics" className="h-48 w-full object-cover group-hover:opacity-90 transition" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-slate-200 ring-1 ring-white/10">

<svg className="h-3.5 w-3.5 text-emerald-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 7-4-14-3 7H2"></path>
</svg>
                    Analytics
                  </div>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">StreamPulse</h3>

<svg className="h-4.5 w-4.5 text-slate-300 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<path d="M15 3h6v6"></path>
<path d="M10 14 21 3"></path>
</svg>
</div>
<p className="mt-2 text-sm text-slate-400">Realtime event analytics platform processing 2B events/day with sub‑second queries.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">TypeScript</span>
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">Edge</span>
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">ClickHouse</span>
</div>
</div>
</article>

<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] transition">
<div className="relative">
<img alt="AI assistant" className="h-48 w-full object-cover group-hover:opacity-90 transition" src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-slate-200 ring-1 ring-white/10">

<svg className="h-3.5 w-3.5 text-cyan-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
<path d="M8 15h.01M16 15h.01"></path>
</svg>
                    AI
                  </div>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Astra Assist</h3>

<svg className="h-4.5 w-4.5 text-slate-300 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<path d="M15 3h6v6"></path>
<path d="M10 14 21 3"></path>
</svg>
</div>
<p className="mt-2 text-sm text-slate-400">On‑device AI copilot that automates tickets and knowledge retrieval for support teams.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">Rust</span>
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">ONNX</span>
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">gRPC</span>
</div>
</div>
</article>

<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] transition">
<div className="relative">
<img alt="Mobile banking" className="h-48 w-full object-cover group-hover:opacity-90 transition" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-slate-200 ring-1 ring-white/10">

<svg className="h-3.5 w-3.5 text-pink-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<path d="M2 10h20"></path>
</svg>
                    Fintech
                  </div>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Volt Pay</h3>

<svg className="h-4.5 w-4.5 text-slate-300 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<path d="M15 3h6v6"></path>
<path d="M10 14 21 3"></path>
</svg>
</div>
<p className="mt-2 text-sm text-slate-400">Reg‑compliant mobile banking with instant card issuance and risk controls.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">KMS</span>
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">KYC/AML</span>
<span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">Kafka</span>
</div>
</div>
</article>
</div>

<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="flex items-center justify-center h-14 rounded-md border border-white/10 bg-white/5 text-xs tracking-tight text-slate-300">ALPHA</div>
<div className="flex items-center justify-center h-14 rounded-md border border-white/10 bg-white/5 text-xs tracking-tight text-slate-300">BETA</div>
<div className="flex items-center justify-center h-14 rounded-md border border-white/10 bg-white/5 text-xs tracking-tight text-slate-300">OMEGA</div>
<div className="flex items-center justify-center h-14 rounded-md border border-white/10 bg-white/5 text-xs tracking-tight text-slate-300">NOVA</div>
<div className="flex items-center justify-center h-14 rounded-md border border-white/10 bg-white/5 text-xs tracking-tight text-slate-300">ZEN</div>
<div className="flex items-center justify-center h-14 rounded-md border border-white/10 bg-white/5 text-xs tracking-tight text-slate-300">ATOM</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="achievements">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Achievements</h2>
<p className="mt-2 text-slate-300">We measure success by the impact our work creates.</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">

<svg className="h-5 w-5 text-amber-300/90 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21v-4a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<div>
<div className="text-sm font-medium text-white">Best Product Studio 2024</div>
<p className="text-sm text-slate-400">Recognized for innovation and delivery velocity.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">

<svg className="h-5 w-5 text-yellow-300/90 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"></polygon>
</svg>
<div>
<div className="text-sm font-medium text-white">4.9/5 client satisfaction</div>
<p className="text-sm text-slate-400">Across 120+ engagements and multi‑year retainers.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">

<svg className="h-5 w-5 text-emerald-300/90 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21h8"></path>
<path d="M12 17v4"></path>
<path d="M7 4h10v6a5 5 0 0 1-10 0z"></path>
<path d="M18 8h1a3 3 0 0 0 3-3V4h-4"></path>
<path d="M6 8H5a3 3 0 0 1-3-3V4h4"></path>
</svg>
<div>
<div className="text-sm font-medium text-white">Scale to millions</div>
<p className="text-sm text-slate-400">Launched platforms serving 3M+ monthly active users.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-slate-400">Shipped</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">230+</div>
<div className="text-xs text-slate-500">features</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-slate-400">Avg lead time</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">4.2d</div>
<div className="text-xs text-slate-500">idea ➜ prod</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-slate-400">Incidents</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">0.02%</div>
<div className="text-xs text-slate-500">monthly</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-slate-400">Savings</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">$1.8M</div>
<div className="text-xs text-slate-500">cloud ops</div>
</div>
</div>

<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
<div className="flex items-center gap-2 text-sm font-medium text-white">

<svg className="h-4.5 w-4.5 text-indigo-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<circle cx="6" cy="12" r="2"></circle>
<circle cx="18" cy="12" r="2"></circle>
</svg>
                    Recent milestones
                  </div>
<div className="mt-4 space-y-4">
<div className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-emerald-400/20 ring-1 ring-emerald-400/30 flex items-center justify-center">

<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-white">ISO‑27001 rollout complete</div>
<div className="text-xs text-slate-400">Security controls across SDLC and infrastructure.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-indigo-400/20 ring-1 ring-indigo-400/30 flex items-center justify-center">

<svg className="h-3.5 w-3.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" width="20" x="2" y="14"></rect>
<path d="M6 6h.01M6 18h.01"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-white">Multi‑region failover</div>
<div className="text-xs text-slate-400">Active‑active clusters with automated chaos tests.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-cyan-400/20 ring-1 ring-cyan-400/30 flex items-center justify-center">

<svg className="h-3.5 w-3.5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.9 5.7L20 10l-6.1 1.3L12 17l-1.9-5.7L4 10l6.1-1.3L12 3z"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-white">GenAI features GA</div>
<div className="text-xs text-slate-400">Summarization, search, and content moderation shipped.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s build together</h2>
<p className="mt-2 text-slate-300">Tell us about your goals. We’ll respond within 24 hours.</p>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">Email</div>
<a className="mt-1 block text-sm font-medium text-white hover:underline" href="mailto:hello@novaworks.xyz">hello@novaworks.xyz</a>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">HQ</div>
<div className="mt-1 text-sm font-medium text-white">Remote‑first</div>
</div>
</div>
</div>
<form className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-400">First name</label>
<input className="mt-1 w-full rounded-md bg-black/40 px-3 py-2 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" placeholder="Alex" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-400">Last name</label>
<input className="mt-1 w-full rounded-md bg-black/40 px-3 py-2 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" placeholder="Doe" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-slate-400">Work email</label>
<input className="mt-1 w-full rounded-md bg-black/40 px-3 py-2 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" placeholder="you@company.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-slate-400">Project brief</label>
<textarea className="mt-1 w-full rounded-md bg-black/40 px-3 py-2 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" placeholder="Tell us about your timeline, scope, and goals..." rows="4"></textarea>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-400">

<svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
                    We’ll never share your info.
                  </div>
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition" type="submit">
                    Send message
                    
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-[11px] font-semibold tracking-tight text-white">NW</span>
</div>
<div className="text-sm text-slate-400">© <span className="font-medium text-slate-300">NovaWorks</span> · All rights reserved</div>
</div>
<div className="flex items-center gap-4 text-sm text-slate-400">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Security</a>
</div>
</div>
</div>
</footer>
</div>

<style>
      :root { --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; }
      body { font-family: var(--font-sans); }
    </style>

    </>
  );
}
