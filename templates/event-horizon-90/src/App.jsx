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



    // SPA-style navigation (smooth scroll already enabled via class)
    document.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-nav');
        const section = document.getElementById(id);
        if (section) {
          const headerOffset = document.querySelector('header').offsetHeight;
          const rect = section.getBoundingClientRect();
          const scrollTarget = window.scrollY + rect.top - headerOffset - 16;
          window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
        }
      });
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Parallax on scroll
    const parallaxNodes = Array.from(document.querySelectorAll('[data-parallax]'));
    const parallax = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const h = window.innerHeight || document.documentElement.clientHeight;
      parallaxNodes.forEach(node => {
        const strength = parseFloat(node.getAttribute('data-parallax') || '0.2');
        const rect = node.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - h / 2;
        const translateY = -offset * strength * 0.0025 * h;
        const opacity = 1 - Math.abs(offset) / (h * 1.2);
        node.style.transform = `translateY(${translateY}rem)`;
        node.style.opacity = Math.max(0.1, Math.min(1, opacity + 0.1));
      });
    };
    window.addEventListener('scroll', parallax, { passive: true });
    window.addEventListener('resize', parallax);
    window.addEventListener('load', parallax);

    // Particle background inspired by monochrome space field
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width = 0;
    let height = 0;
    let devicePixelRatio = window.devicePixelRatio || 1;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = devicePixelRatio;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      initParticles();
    }

    function initParticles() {
      const count = Math.floor((width * height) / 8000);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(), // depth
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.1 + 0.3
        });
      }
    }

    let lastTime = 0;
    function render(time) {
      const dt = Math.min(100, time - lastTime) / 16.67;
      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      const scrollFactor = (window.scrollY || window.pageYOffset) / (document.body.scrollHeight || height);
      const baseOffset = scrollFactor * 80;

      for (const p of particles) {
        p.x += p.vx * dt * (0.5 + p.z * 1.5);
        p.y += p.vy * dt * (0.5 + p.z * 1.5);

        // Parallax drift
        p.y += baseOffset * (p.z - 0.5) * 0.02 * dt;

        if (p.x < 0) p.x += width;
        if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        if (p.y > height) p.y -= height;

        const depthAlpha = 0.25 + p.z * 0.55;
        const size = p.size * (0.7 + p.z * 1.1);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
        gradient.addColorStop(0, `rgba(255,255,255,${depthAlpha})`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Soft vignette to echo the depth of the original image
      const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) / 3, width / 2, height / 2, Math.max(width, height) / 1.1);
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.8)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(render);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    requestAnimationFrame(render);
  
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
      
<canvas id="particle-canvas"></canvas>
<div className="relative min-h-screen overflow-x-hidden" id="app">

<div className="pointer-events-none fixed inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black to-black"></div>
<div className="absolute -top-1/4 inset-x-0 h-1/2 bg-[radial-gradient(circle_at_top,_#ffffff1f,_transparent_60%)] opacity-60"></div>
</div>

<header className="sticky top-0 z-30 border-b border-white/5 bg-black/70 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full border border-white/40 bg-gradient-to-br from-white to-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.35)]">

<svg className="h-4 w-4 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<circle cx="12" cy="12" r="8"></circle>
<path d="M7 4.2c1.6.5 3.3.8 5 .8s3.4-.3 5-.8"></path>
<path d="M7 19.8c1.6-.5 3.3-.8 5-.8s3.4.3 5 .8"></path>
</svg>
</div>
<span className="text-base font-semibold tracking-tight">Event Horizon</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
<button className="nav-link hover:text-white transition-colors" data-nav="hero">Overview</button>
<button className="nav-link hover:text-white transition-colors" data-nav="platform">Platform</button>
<button className="nav-link hover:text-white transition-colors" data-nav="usecases">Use Cases</button>
<button className="nav-link hover:text-white transition-colors" data-nav="about">Company</button>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-200 hover:border-white/35 hover:bg-white/10 transition-colors">
            Log in
          </button>
<button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.55)] hover:bg-neutral-100 transition-colors">
<span>Request access</span>

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative min-h-[90vh] flex items-center" id="hero">
<div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 lg:flex-row lg:items-center">
<div className="w-full lg:w-1/2 space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-neutral-200 shadow-[0_0_25px_rgba(255,255,255,0.25)]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"></span>
<span>Real-time cognition engine</span>
<span className="text-neutral-500">/</span>
<span>Private beta</span>
</div>
<div className="space-y-6" data-parallax="0.15">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Intelligence beyond
                <span className="inline bg-gradient-to-r from-neutral-100 via-white to-neutral-400 bg-clip-text text-transparent">
                  the visible spectrum
                </span>
</h1>
<p className="max-w-xl text-base sm:text-lg text-neutral-300">
                Event Horizon weaves your data streams into a living model of your business, delivering decisions in milliseconds across the entire stack—without exposing your secrets to the open universe.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:bg-neutral-100 transition-colors">
                Launch console
                
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15c1-5 4-9 9-10 0 0 0 4-3 7s-7 3-7 3Z"></path>
<path d="M5 19c1.5 0 3-1.5 3-3-1.5 0-3 1.5-3 3Z"></path>
<path d="M9 5l1 1"></path>
<path d="M18 12l1 1"></path>
<path d="M12 18l1 1"></path>
<path d="M5 5l3 3"></path>
</svg>
</button>
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                View architecture
                
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2v4"></path>
<path d="m19.8 4.2-2.8 2.8"></path>
<path d="M22 12h-4"></path>
<path d="m19.8 19.8-2.8-2.8"></path>
<path d="M12 22v-4"></path>
<path d="m4.2 19.8 2.8-2.8"></path>
<path d="M2 12h4"></path>
<path d="m4.2 4.2 2.8 2.8"></path>
</svg>
</button>
</div>
<div className="flex flex-wrap gap-6 pt-2 text-xs text-neutral-400">
<div>
<div className="font-medium text-neutral-200">4.3ms</div>
<div>Median inference latency</div>
</div>
<div>
<div className="font-medium text-neutral-200">Zero-trust</div>
<div>Encrypted feature space</div>
</div>
<div>
<div className="font-medium text-neutral-200">Petabyte scale</div>
<div>Streaming observability</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 mt-10 lg:mt-0">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-black to-black shadow-[0_32px_120px_rgba(0,0,0,0.9)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.12),transparent_55%)] mix-blend-screen"></div>

<div className="absolute inset-x-0 top-0 h-1/2 opacity-80" data-parallax="0.25">
<div className="h-full bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.18),transparent_55%)]"></div>
</div>
<div className="absolute inset-x-0 top-1/4 h-3/4 opacity-60" data-parallax="0.45">
<div className="h-full bg-[radial-gradient(circle_at_0%_100%,rgba(255,255,255,0.28),transparent_60%),radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.2),transparent_60%)]"></div>
</div>
<div className="absolute inset-x-0 bottom-0 h-full opacity-40" data-parallax="0.7">
<div className="h-full bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.35),transparent_65%)]"></div>
</div>

<div className="absolute inset-0 opacity-70 mix-blend-screen">
<div className="h-full w-full bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:6px_6px]"></div>
</div>

<div className="relative z-10 h-full w-full p-4 sm:p-6 flex flex-col justify-between">
<div className="flex justify-between items-start gap-4">
<div className="rounded-2xl bg-black/60 border border-white/10 px-4 py-3 backdrop-blur">
<div className="flex items-center justify-between gap-3">
<span className="text-xs font-medium text-neutral-200">Global signal map</span>

<svg className="h-3.5 w-3.5 text-neutral-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"></path>
</svg>
</div>
<div className="mt-2 flex items-center gap-2 text-[0.7rem] text-neutral-400">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]"></div>
<span>37.2M live events</span>
</div>
</div>
<div className="rounded-2xl bg-white text-black px-3 py-2 text-[0.65rem] font-medium shadow-[0_0_30px_rgba(255,255,255,0.7)]">
                    99.997% <span className="text-neutral-600">decision uptime</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-[0.65rem] text-neutral-300">
<div className="rounded-2xl border border-white/10 bg-black/60 p-2.5 backdrop-blur" data-parallax="0.3">
<div className="flex items-center justify-between">
<span className="text-neutral-400">Anomaly</span>

<svg className="h-3.5 w-3.5 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M16 8a5 5 0 1 1-4-2"></path>
<path d="M20 8A9 9 0 1 1 8 4"></path>
<path d="m2 2 4 4"></path>
</svg>
</div>
<div className="mt-2 text-xs font-medium text-emerald-400">+42%</div>
<p className="mt-1 leading-snug text-neutral-400">Higher catch rate across payments graph.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/60 p-2.5 backdrop-blur" data-parallax="0.5">
<div className="flex items-center justify-between">
<span className="text-neutral-400">Latency</span>

<svg className="h-3.5 w-3.5 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div className="mt-2 text-xs font-medium text-neutral-200">4.3 ms</div>
<p className="mt-1 leading-snug text-neutral-400">P95 end-to-end decisions.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/60 p-2.5 backdrop-blur" data-parallax="0.7">
<div className="flex items-center justify-between">
<span className="text-neutral-400">Privacy</span>

<svg className="h-3.5 w-3.5 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
</svg>
</div>
<p className="mt-2 leading-snug text-neutral-400">On-device feature encryption with secure aggregation.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-black to-black" id="platform">
<div className="mx-auto max-w-6xl px-4 py-20 space-y-12">
<div className="max-w-3xl space-y-4" data-parallax="0.15">
<p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">Platform</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              A single continuum from raw events to real-time action
            </h2>
<p className="text-base sm:text-lg text-neutral-300">
              Link streaming data, foundation models, and decision policies into one continuous loop. No fragile pipelines. No shadow copies. Just a live model of your universe.
            </p>
</div>
<div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">

<div className="space-y-6">
<div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur" data-parallax="0.3">
<div className="absolute inset-x-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/40 to-transparent sm:block"></div>
<ol className="relative grid gap-6 sm:grid-cols-4">
<li className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"></div>
<span className="text-xs font-medium text-neutral-200">01 · Ingest</span>
</div>
<p className="text-xs text-neutral-300">
                      Ship logs, telemetry, and transactional events over a single streaming plane with adaptive sampling.
                    </p>
</li>
<li className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-white/80"></div>
<span className="text-xs font-medium text-neutral-200">02 · Encode</span>
</div>
<p className="text-xs text-neutral-300">
                      Turn everything into compact semantic vectors with domain-tuned encoders and zero-copy transforms.
                    </p>
</li>
<li className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-white/60"></div>
<span className="text-xs font-medium text-neutral-200">03 · Decide</span>
</div>
<p className="text-xs text-neutral-300">
                      Run ensembles of policies, graphs, and generative models with guardrails and counterfactual replay.
                    </p>
</li>
<li className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-neutral-400"></div>
<span className="text-xs font-medium text-neutral-200">04 · Act</span>
</div>
<p className="text-xs text-neutral-300">
                      Stream decisions back to your stack with signed, explainable traces and live evaluation.
                    </p>
</li>
</ol>
</div>

<div className="rounded-3xl border border-white/10 bg-black/80 p-4 sm:p-6 font-mono text-xs text-neutral-200 backdrop-blur" data-parallax="0.45">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
<span className="text-[0.7rem] text-neutral-400">/sdk/node.js</span>
</div>
<div className="flex items-center gap-1.5 text-[0.65rem] text-neutral-400">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span>live</span>
</div>
</div>
<pre className="overflow-x-auto leading-relaxed"><code><span className="text-sky-300">import</span> { <span className="text-emerald-300">createClient</span> } <span className="text-sky-300">from</span> <span className="text-amber-200">'@event-horizon/edge'</span>

<span className="text-sky-300">const</span> client = <span className="text-emerald-300">createClient</span>({
  key: process.env.EVENT_HORIZON_KEY,
  region: <span className="text-amber-200">'us-east-1'</span>,
})

<span className="text-sky-300">const</span> decision = <span className="text-sky-300">await</span> client.decisions.create({
  space: <span className="text-amber-200">'payments'</span>,
  event: {
    user_id: <span className="text-amber-200">'u_3f92'</span>,
    amount: <span className="text-purple-200">4200</span>,
    ip: <span className="text-amber-200">'203.0.113.4'</span>,
  },
  explain: <span className="text-purple-200">true</span>,
})

<span className="text-sky-300">if</span> (decision.action === <span className="text-amber-200">'block'</span>) {
  <span className="text-emerald-300">flagPayment</span>(decision.reason)
}</code></pre>
</div>
</div>

<div className="space-y-5">
<div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur" data-parallax="0.35">
<h3 className="text-sm font-medium text-neutral-100">Deterministic latency envelope</h3>
<p className="mt-2 text-xs text-neutral-300">
                  Edge execution pods keep your percentile tails flat, even under burst-heavy workloads. Every call is budgeted and audited.
                </p>
<div className="mt-4 flex items-end justify-between text-xs">
<div>
<div className="text-2xl font-semibold tracking-tight text-white">4.3 ms</div>
<div className="text-neutral-400">P95 global</div>
</div>
<div className="h-14 flex-1 rounded-full bg-[radial-gradient(circle_at_0%_100%,rgba(255,255,255,0.25),transparent_65%),radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.25),transparent_65%)]"></div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-black/70 p-4 sm:p-6 backdrop-blur" data-parallax="0.55">
<h3 className="text-sm font-medium text-neutral-100">Aligned with your risk surface</h3>
<p className="mt-2 text-xs text-neutral-300">
                  Use your existing policies as first-class citizens—no retraining from scratch, no opaque overrides. Every decision ships with a human-readable trace.
                </p>
<ul className="mt-3 space-y-1.5 text-xs text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    100% coverage for audit-grade logging
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                    Streaming counterfactual evaluation without impacting customers
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
                    Policy diffs with natural-language summaries
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-black" id="usecases">
<div className="mx-auto max-w-6xl px-4 py-20 space-y-12">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="space-y-3" data-parallax="0.15">
<p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">Use cases</p>
<h2 className="text-3xl font-semibold tracking-tight text-white">Where Event Horizon plugs in today</h2>
</div>
<p className="max-w-md text-base text-neutral-300" data-parallax="0.25">
              Start with one surface, then progressively wire your entire stack into a single, coherent intelligence layer.
            </p>
</div>
<div className="grid gap-6 md:grid-cols-3">
<article className="group rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur hover:border-white/40 hover:bg-white/10 transition-colors" data-parallax="0.35">
<div className="flex items-center justify-between gap-3">
<h3 className="text-sm font-medium text-neutral-100">Risk &amp; fraud</h3>

<svg className="h-4 w-4 text-neutral-200 group-hover:text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<p className="mt-3 text-xs text-neutral-300">
                Unify device, behavioral, and payments data into a live risk surface. Ship new rules in minutes, measured in real dollars saved.
              </p>
<dl className="mt-4 grid grid-cols-2 gap-3 text-[0.7rem] text-neutral-300">
<div>
<dt className="text-neutral-400">Chargeback loss</dt>
<dd className="text-emerald-400 font-medium">−38%</dd>
</div>
<div>
<dt className="text-neutral-400">False positives</dt>
<dd className="text-emerald-300 font-medium">−21%</dd>
</div>
</dl>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur hover:border-white/40 hover:bg-white/10 transition-colors" data-parallax="0.45">
<div className="flex items-center justify-between gap-3">
<h3 className="text-sm font-medium text-neutral-100">Personalization</h3>

<svg className="h-4 w-4 text-neutral-200 group-hover:text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3 13.09 7.17 17 8 13.09 8.83 12 13 10.91 8.83 7 8l3.91-.83L12 3Z"></path>
<path d="M5 15 5.54 17.18 7 18l-1.46.82L5 21l-.54-2.18L3 18l1.46-.82L5 15Z"></path>
<path d="M19 15.5 19.35 17 20.5 17.5 19.35 18 19 19.5 18.65 18 17.5 17.5 18.65 17 19 15.5Z"></path>
</svg>
</div>
<p className="mt-3 text-xs text-neutral-300">
                Power truly individual experiences across channels with a single, privacy-preserving identity graph and unified embeddings.
              </p>
<dl className="mt-4 grid grid-cols-2 gap-3 text-[0.7rem] text-neutral-300">
<div>
<dt className="text-neutral-400">Lift in CTR</dt>
<dd className="text-emerald-400 font-medium">+27%</dd>
</div>
<div>
<dt className="text-neutral-400">Cold start</dt>
<dd className="text-emerald-300 font-medium">2 events</dd>
</div>
</dl>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur hover:border-white/40 hover:bg-white/10 transition-colors" data-parallax="0.55">
<div className="flex items-center justify-between gap-3">
<h3 className="text-sm font-medium text-neutral-100">Autonomous operations</h3>

<svg className="h-4 w-4 text-neutral-200 group-hover:text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
<path d="M3 10h2"></path>
<path d="M3 14h2"></path>
<path d="M19 10h2"></path>
<path d="M19 14h2"></path>
<path d="M10 3v2"></path>
<path d="M14 3v2"></path>
<path d="M10 19v2"></path>
<path d="M14 19v2"></path>
</svg>
</div>
<p className="mt-3 text-xs text-neutral-300">
                Let the system tune infrastructure, workflows, and incident response in real time—always within the guardrails you define.
              </p>
<dl className="mt-4 grid grid-cols-2 gap-3 text-[0.7rem] text-neutral-300">
<div>
<dt className="text-neutral-400">MTTR</dt>
<dd className="text-emerald-400 font-medium">−41%</dd>
</div>
<div>
<dt className="text-neutral-400">Playbooks</dt>
<dd className="text-emerald-300 font-medium">fully automated</dd>
</div>
</dl>
</article>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-black to-neutral-950" id="about">
<div className="mx-auto max-w-6xl px-4 py-20 space-y-12">
<div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
<div className="space-y-5" data-parallax="0.25">
<p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">Company</p>
<h2 className="text-3xl font-semibold tracking-tight text-white">
                Built by the teams who scaled intelligence at planetary scale
              </h2>
<p className="text-base text-neutral-300">
                We have spent the last decade building large-scale machine learning systems for global payments, logistics, and security platforms.
                Event Horizon distills that experience into a system you can wire in days, not quarters.
              </p>
<p className="text-base text-neutral-300">
                We partner deeply with a small number of companies per region. Every deployment is bespoke, infrastructure-conscious, and governed by your compliance requirements.
              </p>
</div>
<div className="space-y-5">
<div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur" data-parallax="0.35">
<h3 className="text-sm font-medium text-neutral-100">Private beta</h3>
<p className="mt-2 text-xs text-neutral-300">
                  We are currently onboarding product, security, and data teams with high-velocity decision surfaces.
                </p>
<form className="mt-4 space-y-3">
<div className="space-y-1.5">
<label className="block text-[0.7rem] text-neutral-300">Work email</label>
<input className="w-full rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-500 focus:border-white/40 focus:outline-none focus:ring-0" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-[0.7rem] text-neutral-300">Primary surface</label>
<select className="w-full rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-xs text-neutral-100 focus:border-white/40 focus:outline-none focus:ring-0">
<option className="bg-black">Risk &amp; fraud</option>
<option className="bg-black">Personalization</option>
<option className="bg-black">Autonomous operations</option>
<option className="bg-black">Other</option>
</select>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-medium text-black shadow-[0_0_35px_rgba(255,255,255,0.7)] hover:bg-neutral-100 transition-colors" type="submit">
                    Request introduction
                    
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
<p className="text-[0.65rem] text-neutral-500">
                    By requesting access you agree to minimal usage analytics and encrypted log collection for reliability.
                  </p>
</form>
</div>
<div className="rounded-3xl border border-white/5 bg-black/80 p-4 sm:p-5 text-xs text-neutral-300 backdrop-blur" data-parallax="0.5">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7 7.3A4.48 4.48 0 0 0 15.5 6 7.07 7.07 0 0 0 12 8.1 7.07 7.07 0 0 0 8.5 6a4.48 4.48 0 0 0-3.2 1.3A4.62 4.62 0 0 0 4 11a4.62 4.62 0 0 0 1.3 3.7A4.48 4.48 0 0 0 8.5 16a7.07 7.07 0 0 0 3.5-2.1A7.07 7.07 0 0 0 15.5 16a4.48 4.48 0 0 0 3.2-1.3A4.62 4.62 0 0 0 20 11a4.62 4.62 0 0 0-1.3-3.7Z"></path>
</svg>
<span className="font-medium text-neutral-100">Aligned incentives by design</span>
</div>
<p className="mt-2">
                  We only price on realized value—uplift in revenue, reduced loss, or latency saved—not on tokens or raw compute. Our only incentive is to move your key metrics.
                </p>
</div>
</div>
</div>
<footer className="flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
<p>© <span id="year"></span> Event Horizon Intelligence, Inc.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-300" href="#">Security</a>
<a className="hover:text-neutral-300" href="#">Privacy</a>
<a className="hover:text-neutral-300" href="#">Status</a>
</div>
</footer>
</div>
</section>
</main>
</div>


    </>
  );
}
