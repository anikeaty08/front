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
      
      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Slider controls
      const slider = document.getElementById('slider');
      const next = document.getElementById('nextSlide');
      const prev = document.getElementById('prevSlide');
      const slideAmount = () => Math.min(slider.clientWidth * 0.6, 520);

      if (next) next.addEventListener('click', () => slider.scrollBy({ left: slideAmount(), behavior: 'smooth' }));
      if (prev) prev.addEventListener('click', () => slider.scrollBy({ left: -slideAmount(), behavior: 'smooth' }));
    
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
      

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md mt-4 px-4 py-3 md:px-6 md:py-4 shadow-[0_0_40px_#A020F008,0_0_80px_#00FFE00A]">
<a className="flex items-center gap-3" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white tracking-tight font-medium shadow-[0_0_24px_#00FFE022]">
<span className="text-[13px] leading-none" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>AI</span>
</div>
<span className="text-sm md:text-base font-medium tracking-tight text-white/90" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Agency</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#cases">Case Studies</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#why">Why Us</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-[#00FFE0]/30 bg-[#00FFE0]/10 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-[0_0_24px_#00FFE022] hover:bg-[#00FFE0]/20 hover:shadow-[0_0_36px_#00FFE044] transition" href="#contact">
<i className="w-4 h-4 text-[#00FFE0]" data-lucide="sparkles"></i>
              Get Started
            </a>
<button aria-label="Open Menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.04] p-2 hover:bg-white/[0.06] transition">
<i className="w-5 h-5 text-white/80" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>
<main>

<section className="relative min-h-[92vh] flex items-center overflow-hidden" id="hero">

<div className="absolute inset-0 -z-10">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(160,32,240,0.14),_transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,224,0.10),_transparent_55%)]"></div>

<div className="absolute inset-0 opacity-20">
<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_100%]"></div>
<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_36px]"></div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div className="absolute top-10 left-16 h-2 w-2 rounded-full bg-[#00FFE0] opacity-70 animate-ping"></div>
<div className="absolute top-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-[#A020F0] opacity-70 animate-ping"></div>
<div className="absolute top-1/2 left-1/5 h-1.5 w-1.5 rounded-full bg-[#52EDC7] opacity-70 animate-ping"></div>
<div className="absolute top-1/3 right-16 h-2 w-2 rounded-full bg-[#00FFE0] opacity-70 animate-ping"></div>
<div className="absolute bottom-20 right-1/4 h-1.5 w-1.5 rounded-full bg-[#A020F0] opacity-70 animate-ping"></div>

<div className="absolute -top-12 -right-12 h-64 w-64 rounded-full blur-3xl bg-[#A020F0]/25"></div>
<div className="absolute top-28 left-[-4rem] h-72 w-72 rounded-full blur-3xl bg-[#00FFE0]/20"></div>
<div className="absolute bottom-0 right-1/3 h-52 w-52 rounded-full blur-2xl bg-[#52EDC7]/20"></div>

<i className="absolute left-12 top-24 w-10 h-10 text-[#00FFE0] opacity-80 animate-bounce" data-lucide="cpu"></i>
<i className="absolute right-16 top-36 w-10 h-10 text-[#A020F0] opacity-80 animate-bounce" data-lucide="bot"></i>
<i className="absolute left-1/2 top-12 -translate-x-1/2 w-9 h-9 text-[#52EDC7] opacity-80 animate-bounce" data-lucide="circuit-board"></i>
<i className="absolute left-24 bottom-16 w-10 h-10 text-[#A020F0] opacity-80 animate-bounce" data-lucide="brain"></i>
<i className="absolute right-24 bottom-10 w-10 h-10 text-[#00FFE0] opacity-80 animate-bounce" data-lucide="atom"></i>
</div>
</div>

<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid md:grid-cols-12 items-center gap-10">
<div className="md:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 shadow-[0_0_20px_#00FFE012]">
<span className="h-1.5 w-1.5 rounded-full bg-[#00FFE0] shadow-[0_0_10px_#00FFE0]"></span>
                Vision meets engineering
              </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE0] via-white to-[#A020F0]" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>
                We Build Intelligent Futures
              </h1>
<p className="mt-5 max-w-xl text-base sm:text-lg text-white/70">
                An ultra-modern AI agency crafting automation, data intelligence, and web3 systems with neon precision and glasslike clarity.
              </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-xl border border-[#00FFE0]/30 bg-[#00FFE0]/10 px-5 py-3 text-sm font-medium tracking-tight text-white shadow-[0_0_40px_#00FFE022] hover:bg-[#00FFE0]/20 hover:shadow-[0_0_60px_#00FFE044] hover:outline hover:outline-2 hover:outline-[#00FFE0]/40 transition will-change-transform hover:-translate-y-0.5" href="#contact">
<i className="w-4.5 h-4.5 text-[#00FFE0]" data-lucide="rocket"></i>
                  Get Started
                </a>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium tracking-tight text-white/90 hover:text-white hover:bg-white/[0.07] hover:border-white/25 transition will-change-transform hover:-translate-y-0.5" href="#services">
<i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
                  Explore Services
                </a>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-white/50">
<div className="flex -space-x-2">
<img alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-[#0A0A0F] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-[#0A0A0F] object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=256&auto=format&fit=crop" />
<img alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-[#0A0A0F] object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&auto=format&fit=crop" />
</div>
<span>Trusted by forward-thinking teams</span>
</div>
</div>

<div className="md:col-span-5">
<div className="relative aspect-[4/5] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_40px_#A020F01A,0_0_80px_#00FFE01A] overflow-hidden">

<div className="absolute inset-0 grid place-items-center">
<div className="relative group [transform:perspective(1200px)] transition-transform duration-700 will-change-transform">
<div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-4 shadow-[0_0_60px_#00FFE015] [transform:rotateX(6deg)_rotateY(-8deg)_translateZ(16px)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)_translateZ(24px)] transition-transform duration-700">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="workflow"></i>
<span className="text-sm text-white/80">Autonomous Pipelines</span>
</div>
<div className="mt-4 h-2 w-40 rounded-full bg-[#00FFE0]/30"></div>
<div className="mt-2 h-2 w-28 rounded-full bg-[#A020F0]/30"></div>
</div>
<div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-4 shadow-[0_0_60px_#A020F015] [transform:rotateX(-4deg)_rotateY(6deg)_translateZ(8px)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)_translateZ(16px)] transition-transform duration-700">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#A020F0]" data-lucide="database"></i>
<span className="text-sm text-white/80">Vector Intelligence</span>
</div>
<div className="mt-4 h-2 w-32 rounded-full bg-[#00FFE0]/30"></div>
<div className="mt-2 h-2 w-24 rounded-full bg-[#52EDC7]/30"></div>
</div>
<div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-[#00FFE0]/20 blur-2xl"></div>
<div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-[#A020F0]/20 blur-2xl"></div>
</div>
</div>

<div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2">
<a className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition" href="#about">
<i className="w-4 h-4 text-[#00FFE0]" data-lucide="mouse-pointer-square"></i>
            Scroll
          </a>
</div>
</section>

<section className="relative scroll-mt-24 border-t border-white/10 bg-fixed bg-[radial-gradient(ellipse_at_center,_rgba(0,255,224,0.06),_transparent_65%)]" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>About Us</h2>
<p className="mt-4 text-white/70">We architect intelligent products and automate complex workflows with rigorous engineering and artful design.</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#00FFE016] hover:shadow-[0_0_60px_#00FFE02A] transition hover:-translate-y-1 will-change-transform">
<div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-[#00FFE0]/15 blur-2xl"></div>
<i className="w-6 h-6 text-[#00FFE0]" data-lucide="brain-circuit"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Research-Driven</h3>
<p className="mt-2 text-sm text-white/70">We fuse modern ML with systems thinking to deploy robust, scalable intelligence.</p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#A020F016] hover:shadow-[0_0_60px_#A020F02A] transition hover:-translate-y-1 will-change-transform">
<div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-[#A020F0]/15 blur-2xl"></div>
<i className="w-6 h-6 text-[#A020F0]" data-lucide="line-chart"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Outcome-Focused</h3>
<p className="mt-2 text-sm text-white/70">Every build aligns to measurable value—speed, accuracy, uptime.</p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#52EDC716] hover:shadow-[0_0_60px_#52EDC72A] transition hover:-translate-y-1 will-change-transform">
<div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#52EDC7]/15 blur-2xl"></div>
<i className="w-6 h-6 text-[#52EDC7]" data-lucide="wand-2"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Design-Led</h3>
<p className="mt-2 text-sm text-white/70">Glassmorphic interfaces with precision micro-interactions.</p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#00FFE016] hover:shadow-[0_0_60px_#00FFE02A] transition hover:-translate-y-1 will-change-transform">
<div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[#00FFE0]/15 blur-2xl"></div>
<i className="w-6 h-6 text-[#00FFE0]" data-lucide="shield-check"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Security First</h3>
<p className="mt-2 text-sm text-white/70">Privacy-preserving pipelines and audited deployments.</p>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-24 border-t border-white/10" id="services">
<div className="absolute inset-0 -z-10 bg-fixed bg-[radial-gradient(ellipse_at_center,_rgba(160,32,240,0.08),_transparent_70%)]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Services</h2>
<p className="mt-3 text-white/70 max-w-2xl">From foundation models to automation at scale—engineered for production from day zero.</p>
</div>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#00FFE016] transition will-change-transform [transform:perspective(1200px)] hover:[transform:perspective(1200px)_rotateX(6deg)_rotateY(-6deg)_translateZ(8px)]">
<div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-[#00FFE0]/20 blur-2xl"></div>
<i className="w-6 h-6 text-[#00FFE0]" data-lucide="cpu"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>AI Development</h3>
<p className="mt-2 text-sm text-white/70">Custom LLMs, RAG, vector search, multi-agent systems.</p>
<div className="mt-5 flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4 text-[#00FFE0]" data-lucide="arrow-up-right"></i>
                Model tuning, safety, evals
              </div>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#52EDC716] transition will-change-transform [transform:perspective(1200px)] hover:[transform:perspective(1200px)_rotateX(6deg)_rotateY(6deg)_translateZ(8px)]">
<div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#52EDC7]/20 blur-2xl"></div>
<i className="w-6 h-6 text-[#52EDC7]" data-lucide="cog"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Automation</h3>
<p className="mt-2 text-sm text-white/70">Autonomous workflows, orchestration, and integrations.</p>
<div className="mt-5 flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4 text-[#52EDC7]" data-lucide="arrow-up-right"></i>
                Agents, tools, guardrails
              </div>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#A020F016] transition will-change-transform [transform:perspective(1200px)] hover:[transform:perspective(1200px)_rotateX(-6deg)_rotateY(6deg)_translateZ(8px)]">
<div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#A020F0]/20 blur-2xl"></div>
<i className="w-6 h-6 text-[#A020F0]" data-lucide="database"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Data Science</h3>
<p className="mt-2 text-sm text-white/70">End-to-end data platforming, analytics, MLOps.</p>
<div className="mt-5 flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4 text-[#A020F0]" data-lucide="arrow-up-right"></i>
                Pipelines, evals, dashboards
              </div>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#00FFE016] transition will-change-transform [transform:perspective(1200px)] hover:[transform:perspective(1200px)_rotateX(-6deg)_rotateY(-6deg)_translateZ(8px)]">
<div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#00FFE0]/20 blur-2xl"></div>
<i className="w-6 h-6 text-[#00FFE0]" data-lucide="link"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Web3 Integration</h3>
<p className="mt-2 text-sm text-white/70">On-chain analytics, smart contracts, and identity.</p>
<div className="mt-5 flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4 text-[#00FFE0]" data-lucide="arrow-up-right"></i>
                Wallets, indexing, L2 infra
              </div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-24 border-t border-white/10" id="cases">
<div className="absolute inset-0 -z-10 bg-fixed bg-[radial-gradient(ellipse_at_center,_rgba(0,255,224,0.06),_transparent_70%)]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Case Studies</h2>
<p className="mt-3 text-white/70 max-w-2xl">A neon showcase of shipped intelligence—secure, scalable, delightful.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] p-2 hover:bg-white/[0.08] transition" id="prevSlide">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] p-2 hover:bg-white/[0.08] transition" id="nextSlide">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="mt-8 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4" id="slider">

<article className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[40%]">
<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_50px_#00FFE018] hover:shadow-[0_0_70px_#00FFE030] transition will-change-transform [transform:perspective(1200px)] hover:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-4deg)_translateZ(6px)]">
<img alt="AI Dashboard" className="h-60 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent"></div>
<div className="absolute bottom-0 p-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#00FFE0]/30 bg-[#00FFE0]/10 px-3 py-1 text-xs text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-[#00FFE0]"></span>
                    Fintech
                  </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Realtime Fraud Detection</h3>
<p className="mt-1 text-sm text-white/70">Streaming risk engine with vector embeddings.</p>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[40%]">
<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_50px_#A020F018] hover:shadow-[0_0_70px_#A020F030] transition will-change-transform [transform:perspective(1200px)] hover:[transform:perspective(1200px)_rotateX(4deg)_rotateY(4deg)_translateZ(6px)]">
<img alt="Voice AI" className="h-60 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent"></div>
<div className="absolute bottom-0 p-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#A020F0]/30 bg-[#A020F0]/10 px-3 py-1 text-xs text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-[#A020F0]"></span>
                    Commerce
                  </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Conversational CX</h3>
<p className="mt-1 text-sm text-white/70">Voice agents reducing handle time by 47%.</p>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[40%]">
<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_50px_#52EDC718] hover:shadow-[0_0_70px_#52EDC730] transition will-change-transform [transform:perspective(1200px)] hover:[transform:perspective(1200px)_rotateX(-4deg)_rotateY(4deg)_translateZ(6px)]">
<img alt="Robotics" className="h-60 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent"></div>
<div className="absolute bottom-0 p-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#52EDC7]/30 bg-[#52EDC7]/10 px-3 py-1 text-xs text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-[#52EDC7]"></span>
                    Ops
                  </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Autonomous Fulfillment</h3>
<p className="mt-1 text-sm text-white/70">Vision-based routing and optimization.</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative scroll-mt-24 border-t border-white/10" id="why">
<div className="absolute inset-0 -z-10 bg-fixed bg-[radial-gradient(ellipse_at_center,_rgba(160,32,240,0.07),_transparent_70%)]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Why Choose Us</h2>
<p className="mt-4 text-white/70 max-w-xl">We ship with a production mindset—observability, evals, and governance built-in.</p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:bg-white/[0.05] transition">
<i className="w-5 h-5 text-[#00FFE0]" data-lucide="shield"></i>
<p className="mt-3 text-sm text-white/70">Compliance-ready</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:bg-white/[0.05] transition">
<i className="w-5 h-5 text-[#A020F0]" data-lucide="server-cog"></i>
<p className="mt-3 text-sm text-white/70">MLOps discipline</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:bg-white/[0.05] transition">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="zap"></i>
<p className="mt-3 text-sm text-white/70">Fast iterations</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:bg-white/[0.05] transition">
<i className="w-5 h-5 text-[#00FFE0]" data-lucide="check-circle-2"></i>
<p className="mt-3 text-sm text-white/70">Hard guarantees</p>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl shadow-[0_0_40px_#00FFE015]">
<div className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00FFE0]" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>99.9%</div>
<div className="mt-2 text-xs text-white/60">Uptime</div>
</div>
<div className="col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl shadow-[0_0_40px_#A020F015]">
<div className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A020F0]" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>47%</div>
<div className="mt-2 text-xs text-white/60">Time Saved</div>
</div>
<div className="col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl shadow-[0_0_40px_#52EDC715]">
<div className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#52EDC7]" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>3.2x</div>
<div className="mt-2 text-xs text-white/60">ROI</div>
</div>
<div className="col-span-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#00FFE0]" data-lucide="badge-check"></i>
<p className="text-sm text-white/70">Deployed to multi-cloud and on-prem with zero-trust posture.</p>
</div>
<div className="mt-3 flex items-center gap-3">
<i className="w-5 h-5 text-[#A020F0]" data-lucide="layout-template"></i>
<p className="text-sm text-white/70">Design systems for fast iteration with consistent UX.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-24 border-t border-white/10" id="contact">
<div className="absolute inset-0 -z-10 bg-fixed bg-[radial-gradient(ellipse_at_center,_rgba(0,255,224,0.07),_transparent_70%)]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>Let’s collaborate</h2>
<p className="mt-3 text-white/70 max-w-xl">Tell us about your challenge. We’ll architect a path to intelligent velocity.</p>
<div className="mt-10 space-y-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#00FFE0]" data-lucide="mail"></i>
<span className="text-sm text-white/70">hello@agency.ai</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#A020F0]" data-lucide="map-pin"></i>
<span className="text-sm text-white/70">Global · Remote-first</span>
</div>
</div>
</div>
<form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_#00FFE018]">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-white/60">Name</label>
<input className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#00FFE0]/40 focus:ring-2 focus:ring-[#00FFE0]/30 transition" placeholder="Ada Lovelace" type="text" />
</div>
<div className="space-y-2">
<label className="text-xs text-white/60">Email</label>
<input className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#A020F0]/40 focus:ring-2 focus:ring-[#A020F0]/30 transition" placeholder="you@company.com" type="email" />
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-xs text-white/60">Project Type</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none focus:border-[#52EDC7]/40 focus:ring-2 focus:ring-[#52EDC7]/30 transition">
<option className="bg-[#0A0A0F]">AI Development</option>
<option className="bg-[#0A0A0F]">Automation</option>
<option className="bg-[#0A0A0F]">Data Science</option>
<option className="bg-[#0A0A0F]">Web3 Integration</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" data-lucide="chevron-down"></i>
</div>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-xs text-white/60">Message</label>
<textarea className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#00FFE0]/40 focus:ring-2 focus:ring-[#00FFE0]/30 transition" placeholder="Share goals, constraints, and timelines..." rows="5"></textarea>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4 text-[#00FFE0]" data-lucide="lock"></i>
                  Encrypted submission
                </div>
<button className="inline-flex items-center gap-2 rounded-xl border border-[#00FFE0]/30 bg-[#00FFE0]/10 px-5 py-2.5 text-sm font-medium tracking-tight text-white shadow-[0_0_40px_#00FFE022] hover:bg-[#00FFE0]/20 hover:shadow-[0_0_60px_#00FFE044] hover:outline hover:outline-2 hover:outline-[#00FFE0]/40 transition will-change-transform hover:-translate-y-0.5" type="submit">
<i className="w-4 h-4 text-[#00FFE0]" data-lucide="send"></i>
                  Send Request
                </button>
</div>
</form>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white tracking-tight font-medium">
<span className="text-[12px]" style={{fontFamily: `Poppins, Roboto, sans-serif`}}>AI</span>
</div>
<span className="text-xs text-white/60">© <span id="year">2025</span> Agency. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
