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



    // Smooth reveal on scroll
    (function () {
      const els = Array.from(document.querySelectorAll('.reveal'));
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('active');
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

      els.forEach(el => io.observe(el));

      const style = document.createElement('style');
      style.textContent = `
        .reveal{opacity:0; transform: translateY(1.25rem) scale(0.99); filter: blur(10px); transition: opacity 900ms cubic-bezier(.16,1,.3,1), transform 900ms cubic-bezier(.16,1,.3,1), filter 900ms cubic-bezier(.16,1,.3,1);}
        .reveal.active{opacity:1; transform: translateY(0) scale(1); filter: blur(0);}
        .reveal-delay-100{transition-delay:120ms;}
        .reveal-delay-200{transition-delay:220ms;}
        .reveal-delay-300{transition-delay:320ms;}
      `;
      document.head.appendChild(style);
    })();

    // Scroll cue dot animation
    (function () {
      const dot = document.getElementById('scrollDot');
      let t = 0;
      function tick() {
        t += 0.02;
        const y = 0.9 + (Math.sin(t) + 1) * 0.55;
        dot.style.transform = `translate(-50%, ${y}rem)`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    })();

    // Mobile menu
    (function () {
      const btn = document.getElementById('menuBtn');
      const panel = document.getElementById('mobilePanel');
      btn?.addEventListener('click', () => {
        panel.classList.toggle('hidden');
      });

      panel?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => panel.classList.add('hidden'));
      });
    })();

    // Case studies carousel (simple track translate)
    (function () {
      const track = document.getElementById('caseTrack');
      const slides = Array.from(document.querySelectorAll('.caseSlide'));
      const prev = document.getElementById('prevCase');
      const next = document.getElementById('nextCase');
      const idxEl = document.getElementById('caseIndex');
      const totalEl = document.getElementById('caseTotal');

      totalEl.textContent = String(slides.length).padStart(2, '0');

      let idx = 0;
      function slideWidth() {
        const first = slides[0];
        if (!first) return 0;
        return first.getBoundingClientRect().width;
      }
      function gap() {
        const s = getComputedStyle(track);
        const g = parseFloat(s.columnGap || s.gap || '0');
        return isNaN(g) ? 0 : g;
      }
      function update() {
        const w = slideWidth() + gap();
        track.scrollTo({ left: idx * w, behavior: 'smooth' });
        idxEl.textContent = String(idx + 1).padStart(2, '0');
      }

      prev.addEventListener('click', () => {
        idx = (idx - 1 + slides.length) % slides.length;
        update();
      });
      next.addEventListener('click', () => {
        idx = (idx + 1) % slides.length;
        update();
      });

      window.addEventListener('resize', () => update(), { passive: true });
      update();
    })();

    // Forms (lightweight)
    (function () {
      document.getElementById('year').textContent = new Date().getFullYear();

      const cForm = document.getElementById('contactForm');
      const note = document.getElementById('formNote');
      cForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        note.classList.remove('hidden');
        note.textContent = "Received — we’ll reach out shortly.";
        cForm.reset();
      });

      const nForm = document.getElementById('newsletterForm');
      const nNote = document.getElementById('newsNote');
      nForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        nNote.classList.remove('hidden');
        nNote.textContent = "Subscribed — welcome to ARCWAVE updates.";
        nForm.reset();
      });
    })();
  
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
      

<div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.55]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml, %3Csvg viewBox=\'0 0 180 180\' xmlns=\'http: //www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E&quot'}}></div>

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black"></div>
<div className="absolute -top-24 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(245,158,11,0.18), rgba(0,0,0,0))'}}></div>
</div>

<header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/55 backdrop-blur-xl">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<a className="group flex items-center gap-2.5" href="#home">
<span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(circle at 30% 30%, rgba(245,158,11,0.25), rgba(0,0,0,0) 60%)'}}></span>
<span className="relative text-sm font-medium tracking-tight text-white/90">AW</span>
</span>
<span className="text-sm font-medium tracking-tight text-white/90 transition-colors group-hover:text-white">ARCWAVE</span>
</a>
<nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white" href="#home">Home</a>
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white" href="#vision">Our Vision</a>
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white" href="#technology">Technology</a>
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white" href="#cases">Case Studies</a>
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white" id="menuBtn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</button>
<a className="group hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-50" href="#contact">
<span>Get Started</span>
<iconify-icon className="text-base transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="hidden border-t border-white/5 bg-black/70 backdrop-blur-xl md:hidden" id="mobilePanel">
<div className="mx-auto max-w-7xl px-6 py-4">
<div className="flex flex-col gap-2">
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white" href="#home">Home</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white" href="#vision">Our Vision</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white" href="#technology">Technology</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white" href="#cases">Case Studies</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-amber-50" href="#contact">
<span>Get Started</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<main className="pt-16" id="home">
<section className="relative min-h-[90vh] overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0" style="background:
          radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), rgba(0,0,0,0) 35%),
          radial-gradient(circle at 70% 20%, rgba(255,255,255,0.06), rgba(0,0,0,0) 40%),
          linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9));"></div>

<div className="absolute inset-0 opacity-70" style="background-image:
          radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.35), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 38% 26%, rgba(255,255,255,0.25), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 64% 14%, rgba(255,255,255,0.32), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 82% 34%, rgba(255,255,255,0.22), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 18% 52%, rgba(255,255,255,0.18), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 52% 46%, rgba(255,255,255,0.22), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 77% 58%, rgba(255,255,255,0.18), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 28% 72%, rgba(255,255,255,0.14), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 61% 78%, rgba(255,255,255,0.16), rgba(0,0,0,0)),
          radial-gradient(1px 1px at 89% 74%, rgba(255,255,255,0.12), rgba(0,0,0,0));"></div>
</div>

<div className="absolute inset-0 -z-10">

<div className="absolute inset-x-0 bottom-0 h-1/2" style={{background: 'radial-gradient(ellipse at 50% 92%, rgba(245,158,11,0.18), rgba(0,0,0,0) 58%)'}}></div>

<div className="absolute left-1/2 top-[58%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), rgba(245,158,11,0.35) 25%, rgba(245,158,11,0.10) 45%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute left-1/2 top-[58%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-95" style="background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35), rgba(255,255,255,0) 20%),
            radial-gradient(circle at 50% 50%, rgba(245,158,11,0.85), rgba(245,158,11,0.18) 42%, rgba(0,0,0,0) 70%); filter: blur(0.5px);"></div>

<div className="absolute left-1/2 top-[58%] h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.92), rgba(255,255,255,0.2) 25%, rgba(245,158,11,0.65) 50%, rgba(0,0,0,0) 72%)'}}></div>

<div className="absolute inset-0">
<div className="absolute left-1/2 top-0 h-full w-[72rem] -translate-x-1/2 opacity-90" style="background:
              conic-gradient(from 210deg at 50% 55%,
                rgba(245,158,11,0) 0deg,
                rgba(245,158,11,0.0) 20deg,
                rgba(245,158,11,0.35) 40deg,
                rgba(255,255,255,0.05) 48deg,
                rgba(245,158,11,0.0) 62deg,
                rgba(245,158,11,0.30) 78deg,
                rgba(255,255,255,0.04) 90deg,
                rgba(245,158,11,0.0) 110deg,
                rgba(245,158,11,0.25) 140deg,
                rgba(245,158,11,0.0) 180deg,
                rgba(245,158,11,0.20) 220deg,
                rgba(245,158,11,0.0) 360deg);
              filter: blur(10px);"></div>
<div className="absolute left-1/2 top-[8%] h-[85%] w-[54rem] -translate-x-1/2 opacity-80" style="background: linear-gradient(to bottom, rgba(245,158,11,0.0), rgba(245,158,11,0.10), rgba(245,158,11,0.0));
              clip-path: polygon(45% 0%, 55% 0%, 70% 100%, 30% 100%);
              filter: blur(14px);"></div>
<div className="absolute left-1/2 top-[10%] h-[88%] w-[64rem] -translate-x-1/2 opacity-70" style="background: linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.06), rgba(255,255,255,0.0));
              clip-path: polygon(49% 0%, 51% 0%, 66% 100%, 34% 100%);
              filter: blur(16px);"></div>
</div>

<div className="absolute inset-x-0 bottom-0 h-40" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.92) 40%, rgba(0,0,0,1))'}}></div>
</div>

<div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-24 md:pt-28">
<div className="w-full max-w-3xl">
<div className="reveal inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-950/15 px-3 py-1 text-xs font-medium text-amber-100/80 backdrop-blur">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-300">
<iconify-icon className="text-sm" icon="solar:bolt-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</span>
<span className="tracking-wide uppercase">Quantum-grade energy infrastructure</span>
</div>
<h1 className="reveal reveal-delay-100 mt-6 text-4xl font-medium tracking-tight text-white md:text-6xl">
            Harnessing Tomorrow’s Energy Today
          </h1>
<p className="reveal reveal-delay-200 mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/60 md:text-base">
            ARCWAVE builds ultra-efficient energy networks powered by quantum routing, fusion stabilization, and sustainable flow control —
            engineered for the next era of civilization.
          </p>
<div className="reveal reveal-delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/90 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_-12px_rgba(245,158,11,0.9)] transition hover:bg-amber-400/95 hover:shadow-[0_0_58px_-14px_rgba(245,158,11,1)] sm:w-auto" href="#contact">
<span>Get Started</span>
<iconify-icon className="text-base transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</a>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white sm:w-auto" href="#technology">
<iconify-icon className="text-base" icon="solar:play-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>Explore Technology</span>
</a>
</div>
<div className="reveal reveal-delay-300 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="text-xs font-medium text-white/80">Grid efficiency</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">98.6%</div>
<div className="mt-1 text-xs text-white/45">Adaptive routing</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="text-xs font-medium text-white/80">Latency</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">2ms</div>
<div className="mt-1 text-xs text-white/45">Global response</div>
</div>
<div className="hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:block">
<div className="text-xs font-medium text-white/80">Emissions</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">0.00</div>
<div className="mt-1 text-xs text-white/45">Net-zero ops</div>
</div>
</div>
</div>

<div className="reveal reveal-delay-300 mt-14 flex items-center gap-3 text-xs text-white/45">
<span className="hidden sm:inline">Scroll</span>
<span className="relative h-10 w-6 rounded-full border border-white/10 bg-white/5">
<span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-amber-300/80" id="scrollDot"></span>
</span>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-[#050505] py-20" id="vision">
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
<iconify-icon className="text-sm text-amber-300/90" icon="solar:eye-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="uppercase tracking-wide">Our Vision</span>
</div>
<h2 className="mt-5 text-3xl font-medium tracking-tight text-white md:text-4xl">Energy that scales with humanity.</h2>
<p className="mt-4 text-sm font-light leading-relaxed text-white/60 md:text-base">
              We’re building a resilient energy layer for cities, industry, and emerging frontiers — designed to be clean,
              decentralized, and self-optimizing. A grid that anticipates demand, stabilizes supply, and continuously improves.
            </p>
<div className="mt-8 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-300">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-white/85">Built for stability</div>
<div className="text-xs text-white/45">Fault-tolerant by design</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-300">
<iconify-icon className="text-xl" icon="solar:leaf-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-white/85">Designed for net-zero</div>
<div className="text-xs text-white/45">Clean throughput at scale</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal reveal-delay-100">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-50" style={{background: 'radial-gradient(closest-side, rgba(245,158,11,0.22), rgba(0,0,0,0))'}}></div>
<div className="absolute -left-24 -bottom-24 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.12), rgba(0,0,0,0))'}}></div>
<div className="relative">
<div className="flex items-start justify-between gap-6">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-white/50">Signal Map</div>
<div className="mt-1 text-sm font-medium text-white/80">Adaptive flow stabilization</div>
</div>
<div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-amber-200/80">
                    Live
                  </div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-white/55">Node coherence</div>
<div className="text-xs font-medium text-amber-200/80">99.98%</div>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[92%] rounded-full" style={{background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.95))', boxShadow: '0 0 24px rgba(245,158,11,0.35)'}}></div>
</div>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-[0.625rem] font-medium uppercase tracking-wide text-white/45">Flux</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">14.2</div>
<div className="text-xs text-white/45">THz</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-[0.625rem] font-medium uppercase tracking-wide text-white/45">Load</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">421</div>
<div className="text-xs text-white/45">TW</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-[0.625rem] font-medium uppercase tracking-wide text-white/45">Reserve</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">76%</div>
<div className="text-xs text-white/45">capacity</div>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs font-medium text-white/70">
<span className="h-2 w-2 rounded-full bg-amber-400/90" style={{boxShadow: '0 0 16px rgba(245,158,11,0.55)'}}></span>
<span>Primary corridor</span>
</div>
<div className="mt-2 text-xs text-white/50">Low-loss routing path maintained.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs font-medium text-white/70">
<span className="h-2 w-2 rounded-full bg-white/70" style={{boxShadow: '0 0 16px rgba(255,255,255,0.25)'}}></span>
<span>Shield layer</span>
</div>
<div className="mt-2 text-xs text-white/50">Interference dampening active.</div>
</div>
</div>
<div className="mt-6 text-xs text-white/40">
                  ARCWAVE models grid flow using quantum-inspired inference and real-time telemetry.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20" id="technology">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
<iconify-icon className="text-sm text-amber-300/90" icon="solar:cpu-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="uppercase tracking-wide">Key Technology</span>
</div>
<h2 className="mt-5 text-3xl font-medium tracking-tight text-white md:text-4xl">Precision systems. Quietly powerful.</h2>
<p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/60 md:text-base">
              A small set of foundational primitives — engineered end-to-end — enabling efficiency, stability, and responsible scale.
            </p>
</div>
<div className="reveal reveal-delay-100 hidden md:flex items-center gap-2 text-xs text-white/45">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Hover to inspect</span>
</div>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="reveal group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
<div className="flex items-start justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/25 bg-amber-500/10 text-amber-300" style={{boxShadow: '0 0 0 1px rgba(0, 0, 0, 1), 0 0 34px rgba(245,158,11,0.18)'}}>
<iconify-icon className="text-2xl" icon="solar:diagram-up-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-white/35">01</span>
</div>
<h3 className="mt-5 text-lg font-medium tracking-tight text-white">Quantum Grid</h3>
<p className="mt-2 text-sm font-light leading-relaxed text-white/60">
              Route energy like information: adaptive, predictive, and resilient under volatility.
            </p>
<div className="mt-5 flex items-center gap-2 text-xs font-medium text-amber-200/80 opacity-0 transition group-hover:opacity-100">
<span>Learn more</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="reveal reveal-delay-100 group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
<div className="flex items-start justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/25 bg-amber-500/10 text-amber-300" style={{boxShadow: '0 0 0 1px rgba(0, 0, 0, 1), 0 0 34px rgba(245,158,11,0.18)'}}>
<iconify-icon className="text-2xl" icon="solar:sun-2-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-white/35">02</span>
</div>
<h3 className="mt-5 text-lg font-medium tracking-tight text-white">Fusion Core</h3>
<p className="mt-2 text-sm font-light leading-relaxed text-white/60">
              Stabilized containment layers with continuous verification — designed for safe, steady output.
            </p>
<div className="mt-5 flex items-center gap-2 text-xs font-medium text-amber-200/80 opacity-0 transition group-hover:opacity-100">
<span>Learn more</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="reveal reveal-delay-200 group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
<div className="flex items-start justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/25 bg-amber-500/10 text-amber-300" style={{boxShadow: '0 0 0 1px rgba(0, 0, 0, 1), 0 0 34px rgba(245,158,11,0.18)'}}>
<iconify-icon className="text-2xl" icon="solar:wind-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-white/35">03</span>
</div>
<h3 className="mt-5 text-lg font-medium tracking-tight text-white">Sustainable Flow</h3>
<p className="mt-2 text-sm font-light leading-relaxed text-white/60">
              Carbon-aware throughput optimization, balancing cost, demand, and renewable availability.
            </p>
<div className="mt-5 flex items-center gap-2 text-xs font-medium text-amber-200/80 opacity-0 transition group-hover:opacity-100">
<span>Learn more</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-y border-white/5 bg-[#050505] py-20" id="cases">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
<iconify-icon className="text-sm text-amber-300/90" icon="solar:gallery-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="uppercase tracking-wide">Case Studies</span>
</div>
<h2 className="mt-5 text-3xl font-medium tracking-tight text-white md:text-4xl">Proof in deployment.</h2>
<p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/60 md:text-base">
              Select implementations showcasing stable output, reduced loss, and resilient performance under real-world conditions.
            </p>
</div>
<div className="reveal reveal-delay-100 flex items-center gap-2">
<button aria-label="Previous case study" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/75 transition hover:bg-white/10 hover:text-white" id="prevCase">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</button>
<button aria-label="Next case study" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/75 transition hover:bg-white/10 hover:text-white" id="nextCase">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-10">
<div className="flex gap-6 overflow-hidden scroll-smooth" id="caseTrack">

<article className="caseSlide min-w-full md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]">
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="aspect-[16/10] w-full">
<img alt="City grid modernization" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 opacity-90" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0) 60%)'}}></div>
<div className="absolute bottom-0 w-full p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-amber-200/80">Metro</div>
<h3 className="mt-1 text-lg font-medium tracking-tight text-white">Nightline Grid Modernization</h3>
<p className="mt-2 text-sm font-light text-white/60">Loss reduced by 17% across peak corridors.</p>
</div>
<div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-amber-200/80">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</article>

<article className="caseSlide min-w-full md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]">
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="aspect-[16/10] w-full">
<img alt="Industrial fusion stabilization" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" src="https://images.unsplash.com/photo-1548611716-44c96b2f7c72?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 opacity-90" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0) 60%)'}}></div>
<div className="absolute bottom-0 w-full p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-amber-200/80">Industry</div>
<h3 className="mt-1 text-lg font-medium tracking-tight text-white">Fusion Output Stabilization</h3>
<p className="mt-2 text-sm font-light text-white/60">Continuous output maintained for 90-day cycle.</p>
</div>
<div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-amber-200/80">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</article>

<article className="caseSlide min-w-full md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]">
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="aspect-[16/10] w-full">
<img alt="Renewable integration network" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 opacity-90" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0) 60%)'}}></div>
<div className="absolute bottom-0 w-full p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-amber-200/80">Renewables</div>
<h3 className="mt-1 text-lg font-medium tracking-tight text-white">Sustainable Flow Orchestration</h3>
<p className="mt-2 text-sm font-light text-white/60">Carbon-aware routing across regional nodes.</p>
</div>
<div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-amber-200/80">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</article>

<article className="caseSlide min-w-full md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]">
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="aspect-[16/10] w-full">
<img alt="Data center energy optimization" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 opacity-90" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0) 60%)'}}></div>
<div className="absolute bottom-0 w-full p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-amber-200/80">Compute</div>
<h3 className="mt-1 text-lg font-medium tracking-tight text-white">Low-Loss Data Center Feed</h3>
<p className="mt-2 text-sm font-light text-white/60">Peak shaving with predictive scheduling.</p>
</div>
<div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-amber-200/80">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</article>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="text-xs text-white/45">
<span className="font-medium text-white/70" id="caseIndex">01</span>
<span className="mx-1 text-white/25">/</span>
<span id="caseTotal">04</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-white/45">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" style={{boxShadow: '0 0 16px rgba(245,158,11,0.55)'}}></span>
<span>Curated deployments</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
<iconify-icon className="text-sm text-amber-300/90" icon="solar:chat-square-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="uppercase tracking-wide">Testimonials</span>
</div>
<h2 className="mt-5 text-3xl font-medium tracking-tight text-white md:text-4xl">Trusted by teams shipping real infrastructure.</h2>
<p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/60 md:text-base">
            Feedback from operators, engineers, and partners working with ARCWAVE in production environments.
          </p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<figure className="reveal rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<img alt="Profile portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<div>
<div className="text-sm font-medium text-white/85">Elena Park</div>
<div className="text-xs text-white/45">Grid Operations, HelioMetro</div>
</div>
</div>
<blockquote className="mt-5 text-sm font-light leading-relaxed text-white/65">
              “The routing layer is quietly brilliant — it stabilized our night peaks without the usual complexity.
              The interface is minimal, but it communicates exactly what matters.”
            </blockquote>
<div className="mt-5 flex items-center gap-1 text-amber-300/90">
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base opacity-70" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</figure>
<figure className="reveal reveal-delay-100 rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<img alt="Profile portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<div>
<div className="text-sm font-medium text-white/85">Marcus Lin</div>
<div className="text-xs text-white/45">Infrastructure, Aurora Works</div>
</div>
</div>
<blockquote className="mt-5 text-sm font-light leading-relaxed text-white/65">
              “Their fusion stabilization reporting is the best I’ve seen. It’s not a dashboard for show —
              it’s operationally useful, and the alerting is calm and accurate.”
            </blockquote>
<div className="mt-5 flex items-center gap-1 text-amber-300/90">
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</figure>
<figure className="reveal reveal-delay-200 rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<img alt="Profile portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<div>
<div className="text-sm font-medium text-white/85">Aisha Rahman</div>
<div className="text-xs text-white/45">Sustainability, NorthArc</div>
</div>
</div>
<blockquote className="mt-5 text-sm font-light leading-relaxed text-white/65">
              “Carbon-aware flow control is usually vague. ARCWAVE made it measurable and actionable,
              without compromising system stability.”
            </blockquote>
<div className="mt-5 flex items-center gap-1 text-amber-300/90">
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<iconify-icon className="text-base opacity-70" icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</figure>
</div>
</div>
</section>

<section className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-20" id="contact">
<div className="absolute inset-0 -z-10">
<div className="absolute -top-24 left-1/2 h-[30rem] w-[48rem] -translate-x-1/2 rounded-full blur-3xl opacity-35" style={{background: 'radial-gradient(closest-side, rgba(245,158,11,0.20), rgba(0,0,0,0))'}}></div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="reveal overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
<div className="grid gap-0 md:grid-cols-2">
<div className="p-8 md:p-10">
<div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-950/15 px-3 py-1 text-xs font-medium text-amber-100/80">
<iconify-icon className="text-sm" icon="solar:letter-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="uppercase tracking-wide">Contact</span>
</div>
<h2 className="mt-5 text-3xl font-medium tracking-tight text-white md:text-4xl">Deploy a pilot node.</h2>
<p className="mt-4 text-sm font-light leading-relaxed text-white/60 md:text-base">
                Tell us about your energy environment. We’ll propose a deployment plan, telemetry strategy, and stabilization targets.
              </p>
<form className="mt-8 space-y-3" id="contactForm">
<div className="grid gap-3 sm:grid-cols-2">
<input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-500/40" name="name" placeholder="Full name" required=""/>
<input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-500/40" name="email" placeholder="Work email" required="" type="email"/>
</div>
<input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-500/40" name="company" placeholder="Company"/>
<textarea className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-500/40" name="message" placeholder="What are you building? (briefly)" required="" rows="4"></textarea>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-50" type="submit">
<span>Send</span>
<iconify-icon className="text-base transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-white/45">Typical response time: under 24 hours.</p>
</div>
<p className="hidden text-xs text-amber-200/80" id="formNote"></p>
</form>
</div>
<div className="relative border-t border-white/10 md:border-l md:border-t-0">
<div className="absolute inset-0 opacity-80" style="background:
                radial-gradient(circle at 60% 35%, rgba(245,158,11,0.20), rgba(0,0,0,0) 55%),
                linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85));"></div>
<div className="relative p-8 md:p-10">
<div className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur">
<div className="flex items-start justify-between gap-6">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-white/45">Pilot package</div>
<div className="mt-1 text-lg font-medium tracking-tight text-white">ARCWAVE Node</div>
<div className="mt-2 text-sm font-light text-white/60">Telemetry, routing, and stability layer.</div>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/25 bg-amber-500/10 text-amber-300" style={{boxShadow: '0 0 34px rgba(245,158,11,0.20)'}}>
<iconify-icon className="text-2xl" icon="solar:server-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 text-sm text-white/70">
<span className="flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-200/80">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</span>
<span>Deployment in 48 hours</span>
</div>
<div className="flex items-center gap-3 text-sm text-white/70">
<span className="flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-200/80">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</span>
<span>On-site integration support</span>
</div>
<div className="flex items-center gap-3 text-sm text-white/70">
<span className="flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-200/80">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</span>
<span>Stability targets + reporting</span>
</div>
</div>
<div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-white/45">Availability</div>
<div className="mt-1 text-sm font-medium text-white/80">Limited — Q2 intake</div>
</div>
<div className="text-xs font-medium text-amber-200/80">Request access</div>
</div>
</div>
</div>
<div className="mt-6 text-xs text-white/40">
                  By submitting, you agree to be contacted about ARCWAVE products and services.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-16">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-10 md:grid-cols-4">
<div className="md:col-span-1">
<div className="flex items-center gap-2.5">
<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="text-sm font-medium tracking-tight text-white/90">AW</span>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-white/90">ARCWAVE</div>
<div className="text-xs text-white/45">Quantum energy infrastructure</div>
</div>
</div>
<div className="mt-6 flex items-center gap-2">
<a aria-label="X" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:brand-x-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</a>
<a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:brand-github-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</a>
<a aria-label="Discord" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:brand-discord-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</a>
<a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:brand-linkedin-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-white/50">Company</div>
<ul className="mt-4 space-y-2 text-sm text-white/60">
<li><a className="transition hover:text-white" href="#vision">Our Vision</a></li>
<li><a className="transition hover:text-white" href="#technology">Technology</a></li>
<li><a className="transition hover:text-white" href="#cases">Case Studies</a></li>
<li><a className="transition hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-white/50">Resources</div>
<ul className="mt-4 space-y-2 text-sm text-white/60">
<li><a className="transition hover:text-white" href="#">Documentation</a></li>
<li><a className="transition hover:text-white" href="#">Security</a></li>
<li><a className="transition hover:text-white" href="#">API Status</a></li>
<li><a className="transition hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-white/50">Newsletter</div>
<p className="mt-4 text-sm font-light leading-relaxed text-white/60">
              Product notes, deployment insights, and technical updates — occasional, high signal.
            </p>
<form className="mt-5" id="newsletterForm">
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-white/40" icon="solar:letter-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<input className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-28 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-500/40" name="newsletterEmail" placeholder="you@company.com" required="" type="email"/>
<button className="absolute right-1.5 top-1.5 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-50" type="submit">
                  Subscribe
                </button>
</div>
<p className="mt-3 hidden text-xs text-amber-200/80" id="newsNote"></p>
</form>
</div>
</div>
<div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
<div>© <span id="year"></span> ARCWAVE Systems. All rights reserved.</div>
<div className="flex flex-wrap gap-4">
<a className="transition hover:text-white" href="#">Privacy</a>
<a className="transition hover:text-white" href="#">Terms</a>
<a className="transition hover:text-white" href="#">Cookie preferences</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
