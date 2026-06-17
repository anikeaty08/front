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
      
  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      (() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Entrance transitions (CSS-driven, JS-triggered, kept minimal)
        const onReady = () => {
          const deltas = [0, 80, 140, 200];
          ['eyebrow','headline','subtext','cta-wrap'].forEach((id, i) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.style.transitionDelay = (deltas[i]) + 'ms';
            requestAnimationFrame(() => {
              el.classList.remove('opacity-0','translate-y-1','translate-y-2','blur-[2px]');
              el.classList.add('opacity-100','translate-y-0');
            });
          });
          const y = document.getElementById('year');
          if (y) y.textContent = new Date().getFullYear();
        };
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', onReady);
        } else { onReady(); }

        // Pointer handling (kept for parallax in cards)
        const hero = document.getElementById('hero');
        const pointer = { x: 0.5, y: 0.35, t: 0 };
        function updatePointer(e) {
          const rect = hero.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          pointer.x += (px - pointer.x) * 0.15;
          pointer.y += (py - pointer.y) * 0.15;
        }
        window.addEventListener('mousemove', (e) => updatePointer(e), { passive: true });
        window.addEventListener('touchmove', (e) => {
          if (!e.touches[0]) return;
          updatePointer(e.touches[0]);
        }, { passive: true });

        // Cards simulation (kept)
        const space = document.getElementById('cards-space');
        const cards = Array.from(space.querySelectorAll('.card')).map((el, i) => {
          return {
            el,
            base: { x: 0, y: 0, z: 0 },
            depth: parseFloat(el.dataset.depth || 1),
            phase: i * 0.8 + Math.random() * 2,
            scale: 1,
            targetScale: 1,
            hover: false
          };
        });

        function setPerspective() {
          space.style.perspective = window.innerWidth < 640 ? '900px' : '1200px';
        }
        setPerspective();
        window.addEventListener('resize', setPerspective, { passive: true });

        cards.forEach(c => {
          const enter = () => { c.hover = true; c.targetScale = 1.06; };
          const leave = () => { c.hover = false; c.targetScale = 1.0; };
          c.el.addEventListener('mouseenter', enter);
          c.el.addEventListener('mouseleave', leave);
          c.el.addEventListener('focus', enter);
          c.el.addEventListener('blur', leave);
        });

        function layoutCards() {
          const rect = space.getBoundingClientRect();
          const s = Math.min(rect.width, 900);
          const layout = [
            { x: -s * 0.26, y: -s * 0.12, z: 40 },
            { x: 0,           y: -s * 0.22, z: 80 },
            { x:  s * 0.20,  y:  s * 0.08, z: 20 },
          ];
          cards.forEach((c, i) => {
            c.base = layout[i];
          });
        }
        layoutCards();
        window.addEventListener('resize', layoutCards, { passive: true });

        let last = performance.now();
        function tick(now) {
          const dt = Math.min(32, now - last);
          last = now;
          pointer.t += dt * 0.001;

          // Animate cards only (beam removed)
          const tiltX = (pointer.y - 0.45) * (prefersReduced ? 2 : 8);
          const tiltY = (pointer.x - 0.5) * (prefersReduced ? -2 : -10);

          cards.forEach((c, idx) => {
            const t = now * 0.001;
            const floatAmp = prefersReduced ? 4 : 10 + idx * 1.5;
            const float = Math.sin(t * (0.8 + idx * 0.15) + c.phase) * floatAmp;
            const swirl = Math.cos(t * (0.6 + idx * 0.12) + c.phase) * (prefersReduced ? 2 : 6);

            c.scale += (c.targetScale - c.scale) * 0.1;

            const rx = tiltX * c.depth + (prefersReduced ? 0 : swirl * 0.02);
            const ry = tiltY * c.depth + (prefersReduced ? 0 : float * 0.02);
            const rz = (prefersReduced ? 0.2 : 0.35) * Math.sin(t * 0.6 + idx);

            const tx = c.base.x + swirl * 1.2;
            const ty = c.base.y + float;

            const transform =
              `translate3d(${tx}px, ${ty}px, ${c.base.z}px) ` +
              `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) ` +
              `scale(${c.scale})`;

            c.el.style.transform = transform;
          });

          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);

        // Chart.js simple area line
        const ctx = document.getElementById('revenueChart');
        if (ctx && window.Chart) {
          const chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
              datasets: [{
                label: 'Revenue',
                data: [22,24,28,26,31,34,36,39,42,44,47,51],
                tension: 0.35,
                fill: true,
                borderColor: 'rgba(165,243,252,0.9)',
                backgroundColor: 'rgba(8,145,178,0.18)',
                pointRadius: 0,
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,0.05)' },
                  ticks: { color: 'rgba(226,232,240,0.7)', font: { family: 'Inter', size: 11 } }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,0.05)' },
                  ticks: { color: 'rgba(226,232,240,0.7)', font: { family: 'Inter', size: 11 } }
                }
              }
            }
          });
        }
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="w-full border-b border-white/5"></div>

<header className="sticky top-0 z-40 backdrop-blur border-b border-white/5">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex h-14 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[11px] font-medium tracking-tight text-slate-100">AC</span>
<span className="text-sm text-slate-300">AuraChat</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#analytics">Analytics</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Docs</a>
</nav>
<div className="flex items-center gap-3">
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur hover:bg-cyan-400/15 hover:border-cyan-300/50 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30" href="#get-started">
              Get Started
              <svg aria-hidden="true" className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative min-h-[100svh] overflow-hidden" id="hero">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-0" style={{background: 'radial-gradient(60% 60% at 50% 20%, rgba(17,24,39,0) 0%, rgba(2,6,23,0.4) 60%, rgba(0,0,0,0.7) 100%)'}}></div>
<div className="absolute inset-x-0 top-1/2 h-1/2 opacity-60" style={{background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.04) 0%, rgba(0, 0, 0, 0) 60%)', filter: 'blur(18px)'}}></div>
</div>

<div className="relative mx-auto max-w-7xl px-6 md:px-8 pt-16 md:pt-24 lg:pt-28">

<div className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-700 ease-out opacity-0 translate-y-1 blur-[2px]" id="eyebrow" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<div className="flex items-center gap-2 text-[12px] text-slate-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.55)]"></span>
            AuraChat
          </div>
</div>

<h1 className="mx-auto mt-6 max-w-4xl text-center text-[42px] leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl font-semibold transition-all duration-700 ease-out opacity-0 translate-y-2 blur-[2px]" id="headline">
          Design Smarter, Build Faster
        </h1>

<p className="mx-auto mt-5 max-w-2xl text-center text-[16px] md:text-lg text-slate-300/90 transition-all duration-700 ease-out opacity-0 translate-y-2 blur-[2px]" id="subtext">
          Seamless solutions for modern businesses
        </p>

<div className="mt-8 flex items-center justify-center transition-all duration-700 ease-out opacity-0 translate-y-2 blur-[2px]" id="cta-wrap">
<a className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm md:text-base font-medium text-cyan-100 backdrop-blur hover:bg-cyan-400/15 hover:border-cyan-300/50 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30" href="#features" id="get-started" style={{boxShadow: '0 0 0 0 rgba(34,211,238,0)'}}>
            Get Started
            <svg aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span className="absolute -z-10 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{background: 'radial-gradient(closest-side, rgba(34,211,238,0.35), rgba(34,211,238,0))'}}></span>
</a>
</div>

<div className="relative mx-auto mt-14 md:mt-20 h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] max-w-5xl" id="cards-space">

<div className="pointer-events-none absolute inset-0 -z-10" style={{background: 'radial-gradient(600px 300px at 50% 40%, rgba(12, 210, 255, 0.10), rgba(0, 0, 0, 0))', filter: 'blur(22px)'}}></div>

<div aria-label="Floating card: Workflow" className="card absolute left-1/2 top-1/2 w-[220px] sm:w-[240px] md:w-[260px] -translate-x-[160%] -translate-y-[70%] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6),_0_0_30px_-10px_rgba(34,211,238,0.25)] ring-1 ring-white/10 will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_22px_70px_-18px_rgba(0,0,0,0.65),_0_0_50px_-10px_rgba(34,211,238,0.35)]" data-depth="0.9" style={{transformStyle: 'preserve-3d'}} tabindex="0">
<div className="relative overflow-hidden rounded-xl border border-white/5">
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)'}}></div>
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm text-slate-200">Workflow</div>
<span className="text-[10px] text-slate-400">1.2x</span>
</div>
<div className="grid grid-cols-3 gap-1 p-3">
<div className="h-9 rounded-md bg-white/10"></div>
<div className="h-9 rounded-md bg-white/10"></div>
<div className="h-9 rounded-md bg-white/10"></div>
<div className="col-span-2 h-16 rounded-md bg-white/10"></div>
<div className="h-16 rounded-md bg-white/10"></div>
</div>
</div>
</div>

<div aria-label="Floating card: Analytics" className="card absolute left-1/2 top-1/2 w-[220px] sm:w-[240px] md:w-[260px] -translate-x-1/2 -translate-y-[95%] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6),_0_0_30px_-10px_rgba(139,92,246,0.22)] ring-1 ring-white/10 will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_22px_70px_-18px_rgba(0,0,0,0.65),_0_0_50px_-10px_rgba(139,92,246,0.35)]" data-depth="1.1" style={{transformStyle: 'preserve-3d'}} tabindex="0">
<div className="relative overflow-hidden rounded-xl border border-white/5">
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)'}}></div>
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm text-slate-200">Analytics</div>
<span className="text-[10px] text-slate-400">Live</span>
</div>
<div className="p-4">
<div className="h-24 rounded-lg bg-white/10"></div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="h-8 rounded-md bg-white/10"></div>
<div className="h-8 rounded-md bg-white/10"></div>
<div className="h-8 rounded-md bg-white/10"></div>
</div>
</div>
</div>
</div>

<div aria-label="Floating card: Collaboration" className="card absolute left-1/2 top-1/2 w-[220px] sm:w-[240px] md:w-[260px] translate-x-[60%] -translate-y-[15%] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6),_0_0_30px_-10px_rgba(16,185,129,0.22)] ring-1 ring-white/10 will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_22px_70px_-18px_rgba(0,0,0,0.65),_0_0_50px_-10px_rgba(16,185,129,0.35)]" data-depth="0.8" style={{transformStyle: 'preserve-3d'}} tabindex="0">
<div className="relative overflow-hidden rounded-xl border border-white/5">
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)'}}></div>
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm text-slate-200">Collaboration</div>
<span className="text-[10px] text-slate-400">Sync</span>
</div>
<div className="flex items-center gap-2 p-3">
<img alt="Avatar 1" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Avatar 2" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Avatar 3" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="ml-auto h-8 w-14 rounded-md bg-white/10"></div>
</div>
</div>
</div>

<div className="pointer-events-none absolute left-1/2 top-[52%] -translate-x-1/2 hidden md:block" style={{width: '2px', height: '140px', background: 'linear-gradient(180deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 0.35), rgba(34, 211, 238, 0))', filter: 'blur(0.3px)', opacity: '0.45'}}></div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-12">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
<p className="text-center text-sm text-slate-400">Trusted by teams at</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
<div className="mx-auto text-slate-400 text-sm tracking-tight">NX</div>
<div className="mx-auto text-slate-400 text-sm tracking-tight">QP</div>
<div className="mx-auto text-slate-400 text-sm tracking-tight">LUMA</div>
<div className="mx-auto text-slate-400 text-sm tracking-tight">GRID</div>
<div className="mx-auto text-slate-400 text-sm tracking-tight">NOV</div>
<div className="mx-auto text-slate-400 text-sm tracking-tight">ATLAS</div>
</div>
</div>
</div>
</section>

<section className="relative" id="features">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Everything you need to ship faster</h2>
<p className="mt-3 text-slate-300/90">From planning to production—clear insights, automated workflows, and effortless collaboration.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-300">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0"></path><path d="m2 22 5-5"></path><path d="M14 7l-9 9"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">AI-assisted design</h3>
</div>
<p className="mt-3 text-sm text-slate-300/90">Generate layouts, copy, and components with context-aware suggestions.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-violet-300">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Automations</h3>
</div>
<p className="mt-3 text-sm text-slate-300/90">Ship chores to bots. Triggers and workflows out-of-the-box.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-emerald-300">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Security &amp; compliance</h3>
</div>
<p className="mt-3 text-sm text-slate-300/90">SOC 2 ready. Role-based permissions and audit trails.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-sky-300">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Unified workspace</h3>
</div>
<p className="mt-3 text-sm text-slate-300/90">Docs, tasks, discussions—organized and searchable.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-rose-300">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><circle cx="12" cy="4" r="2"></circle><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Granular control</h3>
</div>
<p className="mt-3 text-sm text-slate-300/90">Customize views, fields, and rules without code.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-amber-300">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v2"></path><path d="M5.22 5.22l1.42 1.42"></path><path d="M3 12h2"></path><path d="M5.22 18.78l1.42-1.42"></path><path d="M12 19v2"></path><path d="M17.36 17.36l1.42 1.42"></path><path d="M19 12h2"></path><path d="M17.36 6.64l1.42-1.42"></path><path d="M12 8l-2 4 4 2-2 4"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Reusable components</h3>
</div>
<p className="mt-3 text-sm text-slate-300/90">Build once, reuse everywhere with versioned libraries.</p>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-8 md:py-10">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">From idea to launch—without friction</h3>
<p className="mt-3 text-slate-300/90">Plan, preview, and iterate in one place. Real-time sync keeps everyone in the loop.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-slate-300/90">Instant previews and comments</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-sky-400/30 bg-sky-400/10 text-sky-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
<span className="text-sm text-slate-300/90">One-click handoffs to code</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-violet-400/30 bg-violet-400/10 text-violet-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 3.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.6c.32 0 .63-.1.9-.27V3a2 2 0 1 1 4 0v.09c.37.22.68.53.9.9A1.65 1.65 0 0 0 16 4.6c0 .32.1.63.27.9l.06.06a2 2 0 1 1 2.83 2.83l-.06.06c-.17.27-.27.58-.27.9 0 .51.2.99.56 1.34"></path></svg>
</span>
<span className="text-sm text-slate-300/90">Integrates with your stack</span>
</li>
</ul>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all" href="#pricing">See Pricing</a>
<a className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors" href="#analytics">
                  Learn more
                  <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 -z-10 opacity-50" style={{background: 'radial-gradient(300px 180px at 60% 40%, rgba(12, 210, 255, 0.10), rgba(0, 0, 0, 0))', filter: 'blur(22px)'}}></div>
<img alt="Dashboard preview" className="w-full rounded-xl border border-white/10 object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="analytics">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Clarity in every metric</h3>
<p className="mt-3 text-slate-300/90">Monitor adoption, performance, and revenue in real time. Custom dashboards for every team.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-slate-400">Active users</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">38,412</div>
<div className="mt-1 inline-flex items-center gap-1 text-emerald-400 text-xs">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                  +12.4% WoW
                </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-slate-400">Conversion</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">7.8%</div>
<div className="mt-1 inline-flex items-center gap-1 text-emerald-400 text-xs">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                  +0.9% MoM
                </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-slate-400">Revenue (Last 12 weeks)</div>
<div className="text-lg font-medium tracking-tight text-white">$412,480</div>
</div>
<div className="inline-flex items-center gap-2 text-emerald-400 text-xs">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                +18.3%
              </div>
</div>

<div className="mt-4">
<div className="h-[260px] w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
<div className="h-full w-full p-3">
<canvas className="h-full w-full" id="revenueChart"></canvas>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-md border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-slate-400">Churn</div>
<div className="text-sm font-medium text-white">2.1%</div>
</div>
<div className="rounded-md border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-slate-400">ARPU</div>
<div className="text-sm font-medium text-white">$46.20</div>
</div>
<div className="rounded-md border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-slate-400">LTV</div>
<div className="text-sm font-medium text-white">$1,280</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<div className="flex items-center gap-3">
<img alt="Reviewer 1" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Jasmine Park</div>
<div className="text-xs text-slate-400">Design Lead, Luma</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300/90">We replaced three tools and cut our cycle time by 40%. The collaboration flow is unmatched.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<div className="flex items-center gap-3">
<img alt="Reviewer 2" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Aaron Liu</div>
<div className="text-xs text-slate-400">PM, Atlas</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300/90">Clear insights with zero setup. Our weekly reviews run themselves now.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<div className="flex items-center gap-3">
<img alt="Reviewer 3" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Sofia Mendes</div>
<div className="text-xs text-slate-400">CTO, Grid</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300/90">Fast, reliable, and secure. The developer handoff is the smoothest we’ve seen.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
<div className="mx-auto max-w-3xl text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Simple, transparent pricing</h3>
<p className="mt-3 text-slate-300/90">Start free. Scale when you’re ready.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="text-sm font-medium text-white">Starter</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-white">$0</div>
<div className="text-xs text-slate-400">Free forever</div>
<ul className="mt-6 space-y-2 text-sm text-slate-300/90">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                3 projects
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Realtime collaboration
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                Community support
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all" href="#">Get started</a>
</div>

<div className="relative rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 backdrop-blur ring-1 ring-cyan-400/20 hover:border-cyan-300/50 transition-colors">
<div className="absolute -top-3 right-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[11px] text-cyan-200">Most popular</div>
<div className="text-sm font-medium text-white">Pro</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-white">$19</div>
<div className="text-xs text-slate-300">per user / month</div>
<ul className="mt-6 space-y-2 text-sm text-slate-300/90">
<li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited projects</li>
<li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Automation rules</li>
<li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Insights dashboards</li>
<li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>API access</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-400/15 hover:border-cyan-300/50 transition-all" href="#">Upgrade</a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition-colors">
<div className="text-sm font-medium text-white">Enterprise</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-white">Custom</div>
<div className="text-xs text-slate-300">Volume pricing</div>
<ul className="mt-6 space-y-2 text-sm text-slate-300/90">
<li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>SAML/SSO &amp; SCIM</li>
<li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Private cloud</li>
<li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dedicated support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all" href="#">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="relative" id="faq">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
<div className="mx-auto max-w-3xl text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Frequently asked questions</h3>
<p className="mt-3 text-slate-300/90">Can’t find what you’re looking for? Reach out to our team.</p>
</div>
<div className="mt-10 mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-white">How does the free plan work?</span>
<span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 group-open:rotate-180 transition-transform">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300/90">You get core features with usage limits. No credit card required. Upgrade anytime to unlock automations and advanced analytics.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-white">Do you support SSO and SCIM?</span>
<span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 group-open:rotate-180 transition-transform">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300/90">Yes. Enterprise plans include SAML/SSO, SCIM provisioning, and advanced compliance options.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-white">Can I cancel anytime?</span>
<span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 group-open:rotate-180 transition-transform">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300/90">Absolutely. Your subscription will remain active until the end of the billing period.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-white">Is there an on-prem option?</span>
<span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 group-open:rotate-180 transition-transform">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300/90">Yes. We offer a private cloud deployment on Enterprise with dedicated support.</p>
</details>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
<div className="absolute -inset-8 -z-10 opacity-50" style={{background: 'radial-gradient(500px 260px at 30% 40%, rgba(56, 189, 248, 0.10), rgba(0, 0, 0, 0))', filter: 'blur(24px)'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
<div className="lg:col-span-2">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Ready to move faster?</h3>
<p className="mt-2 text-slate-300/90">Start free today, invite your team, and build without bottlenecks.</p>
</div>
<div className="flex items-center gap-3 lg:justify-end">
<a className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-400/15 hover:border-cyan-300/50 transition-all" href="#get-started">Create account</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all" href="#">Book a demo</a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/5">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="col-span-2 sm:col-span-1">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[11px] font-medium tracking-tight text-slate-100">AC</span>
<span className="text-sm text-slate-300">AuraChat</span>
</div>
<p className="mt-3 text-xs text-slate-400">Design Smarter, Build Faster.</p>
</div>
<div>
<div className="text-sm font-medium text-white">Product</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#analytics">Analytics</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-white">Company</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-white">Resources</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Guides</a></li>
<li><a className="hover:text-white transition-colors" href="#">API</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-6">
<p className="text-xs text-slate-400">© <span id="year"></span> AuraChat Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors text-xs" href="#">Privacy</a>
<a className="text-slate-400 hover:text-white transition-colors text-xs" href="#">Terms</a>
<a className="text-slate-400 hover:text-white transition-colors text-xs" href="#">Security</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
