import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    // Initialize lucide icons with 1.5 stroke width
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
    }
    // Year
    const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();

    // Scroll reveal using Tailwind transitions (JS only toggles classes)
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100','translate-y-0','blur-0');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    revealEls.forEach((el) => io.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ju5gjGnrRr5Ud4fAt7eh"></div></div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

<div className="absolute inset-0 opacity-80 [background:radial-gradient(60%_50%_at_50%_10%,rgba(80,80,255,0.15),rgba(0,0,0,0)_60%)]"></div>

<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1.5px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(0,215,255,0.35), rgba(0,0,0,0))'}}></div>
<div className="absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(180,0,255,0.28), rgba(0,0,0,0))'}}></div>
</div>
<div className="m-[120px]">

<header className="sticky top-[120px] z-40 backdrop-blur-xl bg-black/20 border-b border-white/10">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a aria-label="Home" className="flex items-center gap-3 group" href="#">
<div className="h-7 w-7 rounded-md bg-white/5 border border-white/10 grid place-items-center tracking-tight font-semibold text-white/90 group-hover:bg-white/10 group-hover:border-white/20 transition">
<span className="text-[11px]">FD</span>
</div>
<span className="text-sm text-white/70 group-hover:text-white transition">Frontend Developer</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-white/70 hover:text-white transition" href="#work">Work</a>
<a className="text-white/70 hover:text-white transition" href="#features">Features</a>
<a className="text-white/70 hover:text-white transition" href="#about">About</a>
<a className="text-white/70 hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a aria-label="GitHub" className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="https://github.com" target="_blank">
<i className="h-4.5 w-4.5 text-white/80" data-lucide="github"></i>
</a>
<a aria-label="X" className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="https://x.com" target="_blank">
<i className="h-4.5 w-4.5 text-white/80" data-lucide="twitter"></i>
</a>
<a className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition text-sm" href="#contact">
<i className="h-4.5 w-4.5 text-white/80" data-lucide="mail"></i>
<span>Say hello</span>
</a>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[12px] text-white/70 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out">
<i className="h-3.5 w-3.5 text-cyan-300" data-lucide="zap"></i>
<span>Motion-first frontend</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-100">
              Interfaces that feel alive, fast, and intentional.
            </h1>
<p className="text-base sm:text-lg text-white/70 max-w-xl reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-200">
              I design and build immersive, production-grade UIs with component-driven systems, thoughtful motion, and performance at the core.
            </p>
<div className="flex flex-wrap items-center gap-3 pt-1 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-300">
<a className="group inline-flex items-center gap-2 h-11 px-4 rounded-md border border-white/15 bg-white/10 hover:bg-white/20 hover:border-white/25 transition" href="#work">
<span className="text-sm font-medium text-white">View work</span>
<i className="h-4.5 w-4.5 text-white/90 translate-y-px transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center gap-2 h-11 px-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="#about">
<span className="text-sm text-white/80">Résumé</span>
<i className="h-4.5 w-4.5 text-white/80" data-lucide="download"></i>
</a>
</div>
<div className="pt-6 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-400">
<div className="text-[12px] text-white/50 mb-2">Trusted by teams at</div>
<div className="flex items-center gap-4 opacity-90">
<div className="px-2 py-1 rounded md text-white/60 border border-white/10 bg-white/5 text-[12px] tracking-tight">ALTO</div>
<div className="px-2 py-1 rounded md text-white/60 border border-white/10 bg-white/5 text-[12px] tracking-tight">NOVA</div>
<div className="px-2 py-1 rounded md text-white/60 border border-white/10 bg-white/5 text-[12px] tracking-tight">KITE</div>
<div className="px-2 py-1 rounded md text-white/60 border border-white/10 bg-white/5 text-[12px] tracking-tight">PRISMA</div>
</div>
</div>
</div>

<div className="relative reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-150">
<div className="relative group [perspective:1400px]">
<div className="absolute -inset-6 rounded-2xl blur-2xl opacity-30 transition group-hover:opacity-60" style={{background: 'radial-gradient(closest-side, rgba(56,189,248,0.25), rgba(0,0,0,0))'}}></div>
<div className="relative h-[420px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] overflow-hidden transform-gpu transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(7deg)_rotateY(-9deg)]">

<div className="absolute top-0 left-0 right-0 h-12 bg-black/30 border-b border-white/10 backdrop-blur-xl [transform:translateZ(40px)] flex items-center justify-between px-3">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-400/70"></span>
</div>
<div className="flex items-center gap-2 text-[11px] text-white/60">
<i className="h-3.5 w-3.5" data-lucide="globe"></i>
                    live-preview.app
                  </div>
</div>

<div className="absolute inset-0 p-5 pt-16 space-y-4">

<div className="relative rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 overflow-hidden [transform:translateZ(60px)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-cyan-300" data-lucide="layout-dashboard"></i>
<div className="text-[12px] text-white/70">Dashboard.tsx</div>
</div>
<div className="text-[11px] text-white/50">~1.2ms render</div>
</div>
<pre className="mt-3 text-[11px]/6 text-white/80"><span className="text-cyan-300">export</span> <span className="text-pink-300">function</span> <span className="text-white">Hero</span>() {'{'}
  <span className="text-cyan-300">return</span> (
    <span className="text-white/70">&lt;Frame tilt glow blend /&gt;</span>
  )
{'}'}</pre>
<div className="absolute -bottom-6 right-4 h-24 w-24 rounded-full blur-2xl opacity-50" style={{background: 'radial-gradient(closest-side, rgba(168,85,247,.35), rgba(0,0,0,0))'}}></div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 [transform:translateZ(40px)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-[12px]">
<i className="h-4 w-4 text-violet-300" data-lucide="sparkles"></i>
<span className="text-white/70">Variants</span>
</div>
<span className="text-[11px] text-emerald-300">ready</span>
</div>
<div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-violet-400 animate-pulse"></div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 [transform:translateZ(40px)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-[12px]">
<i className="h-4 w-4 text-cyan-300" data-lucide="component"></i>
<span className="text-white/70">Components</span>
</div>
<span className="text-[11px] text-white/50">28</span>
</div>
<div className="mt-2 grid grid-cols-6 gap-1">
<div className="h-4 rounded bg-white/10"></div>
<div className="h-4 rounded bg-white/10"></div>
<div className="h-4 rounded bg-white/10"></div>
<div className="h-4 rounded bg-white/10"></div>
<div className="h-4 rounded bg-white/10"></div>
<div className="h-4 rounded bg-white/10"></div>
</div>
</div>
</div>

<div className="absolute -left-3 top-24">
<div className="group/chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-3 py-1.5 text-[11px] [transform:translateZ(80px)] transition hover:scale-[1.03]">
<i className="h-4 w-4 text-cyan-300" data-lucide="wand-2"></i>
<span className="text-white/70">Auto-layout</span>
</div>
</div>
<div className="absolute -right-3 bottom-10">
<div className="group/chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-3 py-1.5 text-[11px] [transform:translateZ(80px)] transition hover:scale-[1.03]">
<i className="h-4 w-4 text-violet-300" data-lucide="mouse-pointer-2"></i>
<span className="text-white/70">Micro-interactions</span>
</div>
</div>
</div>
</div>

<div className="mt-6 ml-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] -rotate-1"></div>
<div className="mt-2 ml-20 h-10 rounded-xl border border-white/10 bg-white/[0.02] rotate-1"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-20 md:pt-28" id="features">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Motion canvases</h2>
<div className="text-sm text-white/60">Drag horizontally</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3">
<div className="overflow-x-auto scroll-smooth scroll-p-6 snap-x snap-mandatory">
<div className="flex min-w-max gap-4 p-1">

<article className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out snap-start w-[320px] sm:w-[380px] h-[220px] rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 relative overflow-hidden group [perspective:1200px]">
<div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(240px_140px_at_70%_0%,black,transparent)]">
<div className="absolute -top-16 right-0 h-48 w-48 blur-2xl opacity-40" style={{background: 'radial-gradient(closest-side, rgba(56,189,248,0.5), rgba(0,0,0,0))'}}></div>
</div>
<header className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-white/70">
<i className="h-4 w-4 text-cyan-300" data-lucide="framer"></i>
                    Motion Kit
                  </div>
<span className="text-[11px] text-white/50">Reacts instantly</span>
</header>
<div className="mt-4 h-32 rounded-lg border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden transform-gpu transition-transform duration-500 group-hover:[transform:rotateX(7deg)_rotateY(-7deg)] [transform-style:preserve-3d]">
<div className="grid grid-cols-3 gap-2 p-3">
<div className="h-16 rounded bg-white/10 [transform:translateZ(40px)]"></div>
<div className="h-16 rounded bg-white/10 [transform:translateZ(60px)]"></div>
<div className="h-16 rounded bg-white/10 [transform:translateZ(30px)]"></div>
<div className="col-span-3 h-2 rounded bg-white/10 [transform:translateZ(50px)]"></div>
</div>
</div>
<footer className="mt-3 flex items-center gap-2 text-[11px] text-white/60">
<i className="h-3.5 w-3.5 text-violet-300" data-lucide="sparkles"></i>
                  Variants, constraints, smart layout
                </footer>
</article>

<article className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-100 snap-start w-[320px] sm:w-[380px] h-[220px] rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 relative overflow-hidden group">
<header className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-white/70">
<i className="h-4 w-4 text-emerald-300" data-lucide="code-2"></i>
                    Code &amp; Design
                  </div>
<span className="text-[11px] text-white/50">DX focused</span>
</header>
<div className="mt-4 h-32 rounded-lg border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden">
<div className="p-3 text-[11px] text-white/80">
<span className="text-emerald-300">const</span> ui = createUI(<span className="text-cyan-300">"reusable"</span>)
ui.<span className="text-cyan-300">animate</span>({ opacity: [0,1], y: [8,0] })
ui.<span className="text-emerald-300">export</span>(<span className="text-cyan-300">"production"</span>)</div>
</div>
<footer className="mt-3 flex items-center gap-2 text-[11px] text-white/60">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="cpu"></i>
                  Perf, a11y, and tests included
                </footer>
</article>

<article className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-200 snap-start w-[320px] sm:w-[380px] h-[220px] rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 relative overflow-hidden group [perspective:1200px]">
<header className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-white/70">
<i className="h-4 w-4 text-amber-300" data-lucide="timeline"></i>
                    Scroll choreography
                  </div>
<span className="text-[11px] text-white/50">No jank</span>
</header>
<div className="mt-4 h-32 rounded-lg border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden">
<div className="grid grid-cols-5 gap-1 h-full p-3">
<div className="col-span-1 bg-white/10 rounded"></div>
<div className="col-span-4 bg-white/10 rounded animate-pulse"></div>
<div className="col-span-3 bg-white/10 rounded"></div>
<div className="col-span-2 bg-white/10 rounded"></div>
</div>
</div>
<footer className="mt-3 flex items-center gap-2 text-[11px] text-white/60">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="mouse"></i>
                  Sticky steps, parallax, reveals
                </footer>
</article>

<article className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-300 snap-start w-[320px] sm:w-[380px] h-[220px] rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 relative overflow-hidden group">
<header className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-white/70">
<i className="h-4 w-4 text-sky-300" data-lucide="accessibility"></i>
                    Inclusive by default
                  </div>
<span className="text-[11px] text-white/50">WCAG AA</span>
</header>
<div className="mt-4 h-32 rounded-lg border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden grid place-items-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
<i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>
<span className="text-[12px] text-white/70">Keyboard &amp; SR ready</span>
</div>
</div>
<footer className="mt-3 flex items-center gap-2 text-[11px] text-white/60">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="shield"></i>
                  Robust and resilient UI
                </footer>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-20 md:pt-28" id="work">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Selected work</h2>
<a className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition" href="#">
            Full case studies
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<a className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:blur-[1px] opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-white/80 font-medium">Realtime Analytics UI</div>
<div className="inline-flex items-center gap-1 text-[11px] text-white/60">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i>
</div>
</div>
<p className="mt-1 text-sm text-white/60">Scrollytelling dashboards with pinned sections and responsive charts.</p>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">TypeScript</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">React</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">Motion</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none [background:radial-gradient(280px_160px_at_70%_0%,rgba(168,85,247,.25),transparent)]"></div>
</a>
<a className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-100 group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:blur-[1px] opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-white/80 font-medium">Commerce OS</div>
<div className="inline-flex items-center gap-1 text-[11px] text-white/60">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i>
</div>
</div>
<p className="mt-1 text-sm text-white/60">Design tokens, variants, and end-to-end UX for storefronts.</p>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">Next.js</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">Tailwind</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">A11y</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none [background:radial-gradient(280px_160px_at_70%_0%,rgba(56,189,248,.25),transparent)]"></div>
</a>
<a className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-200 group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:blur-[1px] opacity-90" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-white/80 font-medium">Creator Studio</div>
<div className="inline-flex items-center gap-1 text-[11px] text-white/60">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i>
</div>
</div>
<p className="mt-1 text-sm text-white/60">Live previews, component slots, and media tooling.</p>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">SvelteKit</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">Vite</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">WebGL</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none [background:radial-gradient(280px_160px_at_70%_0%,rgba(34,197,94,.25),transparent)]"></div>
</a>
</div>
</div>
</section>

<section className="relative pt-20 md:pt-28">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div className="space-y-6 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Systematic by design</h2>
<div className="space-y-4">
<div className="flex gap-3">
<div className="mt-1.5 h-6 w-6 rounded-md border border-white/10 bg-white/5 grid place-items-center shrink-0">
<i className="h-3.5 w-3.5 text-cyan-300" data-lucide="boxes"></i>
</div>
<div>
<div className="text-white/80">Component libraries</div>
<p className="text-sm text-white/60">Tokenized, themeable, and documented with usage guidelines.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1.5 h-6 w-6 rounded-md border border-white/10 bg-white/5 grid place-items-center shrink-0">
<i className="h-3.5 w-3.5 text-violet-300" data-lucide="ruler"></i>
</div>
<div>
<div className="text-white/80">Responsive rules</div>
<p className="text-sm text-white/60">Fluid type, clamp-based spacing, and adaptive layout primitives.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1.5 h-6 w-6 rounded-md border border-white/10 bg-white/5 grid place-items-center shrink-0">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="sparkle"></i>
</div>
<div>
<div className="text-white/80">Motion language</div>
<p className="text-sm text-white/60">Staggered transitions, micro-interactions, and reduced-motion paths.</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 h-11 px-4 rounded-md border border-white/15 bg-white/10 hover:bg-white/20 hover:border-white/25 transition" href="#contact">
<span className="text-sm text-white">Book a collaboration call</span>
<i className="h-4.5 w-4.5" data-lucide="phone-call"></i>
</a>
</div>
</div>

<div className="relative">
<div className="lg:sticky lg:top-24 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-150">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-white/70">
<i className="h-4 w-4 text-cyan-300" data-lucide="layout-template"></i>
                    Component preview
                  </div>
<div className="inline-flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></div>
<span className="text-[11px] text-white/60">ready</span>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-3">
<div className="group relative rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl p-4 overflow-hidden [perspective:1000px]">
<div className="absolute -inset-16 opacity-20" style={{background: 'radial-gradient(closest-side, rgba(56,189,248,0.4), rgba(0,0,0,0))'}}></div>
<div className="space-y-2 transform-gpu transition-transform duration-500 group-hover:[transform:rotateX(6deg)_rotateY(-6deg)] [transform-style:preserve-3d]">
<div className="h-5 w-24 rounded bg-white/10 [transform:translateZ(40px)]"></div>
<div className="h-3 w-40 rounded bg-white/10 [transform:translateZ(60px)]"></div>
<div className="h-3 w-28 rounded bg-white/10 [transform:translateZ(30px)]"></div>
</div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl p-4 overflow-hidden [perspective:1000px]">
<div className="space-y-2 transform-gpu transition-transform duration-500 group-hover:[transform:rotateX(6deg)_rotateY(6deg)] [transform-style:preserve-3d]">
<div className="h-16 rounded bg-white/10 [transform:translateZ(40px)]"></div>
<div className="grid grid-cols-3 gap-2">
<div className="h-4 rounded bg-white/10 [transform:translateZ(50px)]"></div>
<div className="h-4 rounded bg-white/10 [transform:translateZ(30px)]"></div>
<div className="h-4 rounded bg-white/10 [transform:translateZ(40px)]"></div>
</div>
</div>
</div>
<div className="col-span-2 rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-white/70">
<i className="h-4 w-4 text-violet-300" data-lucide="layers"></i>
                        Variants
                      </div>
<span className="text-[11px] text-white/60">3 states</span>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-9 px-3 rounded-md border border-white/10 bg-white/5 inline-flex items-center justify-center text-[12px] text-white/70 hover:border-white/20 hover:bg-white/10 transition">Default</div>
<div className="h-9 px-3 rounded-md border border-white/10 bg-white/5 inline-flex items-center justify-center text-[12px] text-white/70 hover:border-white/20 hover:bg-white/10 transition">Hover</div>
<div className="h-9 px-3 rounded-md border border-white/10 bg-white/5 inline-flex items-center justify-center text-[12px] text-white/70 hover:border-white/20 hover:bg-white/10 transition">Pressed</div>
</div>
</div>
</div>
</div>
<p className="text-[12px] text-white/50 mt-3">Preview cards tilt in 3D on hover. Sticky frame demonstrates scroll pinning patterns.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-20 md:pt-28" id="about">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-10 items-start">
<div className="md:col-span-1 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">About</h2>
<p className="mt-2 text-sm text-white/60">10+ years crafting web experiences across startups and product teams.</p>
<div className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
<i className="h-4 w-4 text-cyan-300" data-lucide="map-pin"></i>
              Remote • Worldwide
            </div>
</div>
<div className="md:col-span-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-150">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
<div className="flex items-center gap-4">
<img alt="Portrait" className="h-14 w-14 rounded-xl object-cover border border-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<div className="text-white/80">Alex Doe</div>
<div className="text:[12px] text-white/60 text-[12px]">Frontend Engineer • Design Systems • Motion</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70">
                I build maintainable interfaces with a strong focus on motion and accessibility. I partner closely with design to ship delightful products without sacrificing performance.
              </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">React</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">TypeScript</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">Svelte</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">Next.js</span>
<span className="px-2 py-1 rounded-md border border-white/10 text-[11px] text-white/60">Web Animations</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-20 md:pt-28 pb-16 md:pb-24" id="contact">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Let’s build something</h2>
<p className="mt-2 text-sm text-white/60">Tell me about your goals, timelines, and the experience you want to create.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 h-11 px-4 rounded-md border border-white/15 bg-white/10 hover:bg-white/20 hover:border-white/25 transition" href="mailto:hello@example.com">
<i className="h-4.5 w-4.5" data-lucide="mail"></i>
<span className="text-sm">hello@example.com</span>
</a>
<a className="inline-flex items-center gap-2 h-11 px-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="https://cal.com" target="_blank">
<i className="h-4.5 w-4.5" data-lucide="calendar"></i>
<span className="text-sm">Schedule a call</span>
</a>
</div>
</div>
<form className="space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-[12px] text-white/60">Name</label>
<input className="mt-1 w-full h-11 rounded-md bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/20 focus:ring-0" placeholder="Your name" type="text"/>
</div>
<div>
<label className="text-[12px] text-white/60">Email</label>
<input className="mt-1 w-full h-11 rounded-md bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/20 focus:ring-0" placeholder="you@company.com" type="email"/>
</div>
</div>
<div>
<label className="text-[12px] text-white/60">Project brief</label>
<textarea className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/20 focus:ring-0" placeholder="What are we building?" rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="text-[12px] text-white/50">I typically reply within 24 hours.</div>
<button className="group inline-flex items-center gap-2 h-11 px-4 rounded-md border border-white/15 bg-white/10 hover:bg-white/20 hover:border-white/25 transition" type="submit">
<span className="text-sm">Send</span>
<i className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 -translate-y-px" data-lucide="send"></i>
</button>
</div>
</form>
</div>
</div>
<div className="mt-8 flex items-center justify-between text-[12px] text-white/50 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-out delay-150">
<div>© <span id="y">2025</span> Alex Doe</div>
<div className="inline-flex items-center gap-3">
<a className="hover:text-white transition" href="#">Privacy</a>
<span className="text-white/20">•</span>
<a className="hover:text-white transition" href="#">Imprint</a>
</div>
</div>
</div>
</section>
</div>



    </>
  );
}
