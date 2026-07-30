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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { stroke: 'currentColor', 'stroke-width': 1.5 }
          });
        }
        const year = document.getElementById('year');
        if (year) year.textContent = new Date().getFullYear();
        const menuBtn = document.getElementById('menuBtn');
        const mobile = document.getElementById('mobileMenu');
        if (menuBtn && mobile) {
          menuBtn.addEventListener('click', () => {
            mobile.classList.toggle('hidden');
          });
        }

        // Reliable in-page navigation with header offset + smooth scroll
        const header = document.querySelector('header');
        const headerOffset = header ? header.offsetHeight + 8 : 0;

        document.querySelectorAll('a[href^="#"]').forEach((link) => {
          link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href');
            if (!hash || hash === '#') return;
            const target = document.querySelector(hash);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top, behavior: 'smooth' });
            history.pushState(null, '', hash);
            if (mobile && !mobile.classList.contains('hidden')) {
              mobile.classList.add('hidden');
            }
          });
        });

        // Cursor-based 3D parallax tilt (minimal, opt-in via data-parallax)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (!prefersReducedMotion && !isTouch) {
          const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

          document.querySelectorAll('[data-parallax]').forEach((el) => {
            const maxTilt = parseFloat(el.getAttribute('data-tilt')) || 10;
            const enter = () => { el.style.transition = 'transform 180ms ease'; };
            const leave = () => {
              el.style.transition = 'transform 220ms ease';
              el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            };
            const move = (e) => {
              const rect = el.getBoundingClientRect();
              const px = e.clientX - rect.left;
              const py = e.clientY - rect.top;
              const rx = clamp(((py / rect.height) - 0.5) * -2 * maxTilt, -maxTilt, maxTilt);
              const ry = clamp(((px / rect.width) - 0.5) * 2 * maxTilt, -maxTilt, maxTilt);
              el.style.transform = 'rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) scale(1.01)';
            };
            el.addEventListener('mouseenter', enter);
            el.addEventListener('mousemove', move);
            el.addEventListener('mouseleave', leave);
          });
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(32,176,255,0.10),transparent),radial-gradient(900px_500px_at_80%_10%,rgba(120,119,198,0.08),transparent),radial-gradient(700px_400px_at_50%_120%,rgba(0,180,150,0.10),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`, backgroundSize: `18px 18px`}}></div>
<div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent"></div>

<div className="absolute left-[6%] top-[24%] h-28 w-28 rounded-full blur-2xl opacity-40 animate-bounce" style={{background: `radial-gradient(closest-side, rgba(34,211,238,0.45), transparent)`, animationDuration: `5.5s`, transform: `translateZ(60px)`}}></div>
<div className="absolute right-[10%] top-[18%] h-24 w-24 rounded-full blur-2xl opacity-35 animate-bounce" style={{background: `radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)`, animationDuration: `6.5s`, animationDelay: `.6s`, transform: `translateZ(80px)`}}></div>
<div className="absolute right-[22%] bottom-[14%] h-32 w-32 rounded-full blur-2xl opacity-35 animate-bounce" style={{background: `radial-gradient(closest-side, rgba(16,185,129,0.40), transparent)`, animationDuration: `7s`, animationDelay: `.2s`, transform: `translateZ(100px)`}}></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="flex items-center justify-between h-16">
<a className="group inline-flex items-center gap-2" href="#" style={{perspective: `600px`, transformStyle: `preserve-3d`}}>
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 grid place-items-center shadow-inner shadow-black/30 transform-gpu transition will-change-transform group-hover:[transform:translateZ(10px)_rotateX(6deg)_rotateY(-6deg)]">
<span className="text-[13px] font-semibold tracking-tight">FD</span>
</div>
<span className="text-sm md:text-base font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">Frontend Developer</span>
</a>
<nav className="hidden md:flex items-center gap-2">
<a className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#experience">Experience</a>
<a className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#stack">Tech</a>
<a className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 hover:bg-cyan-500/15 text-cyan-200 hover:text-cyan-100 px-3 py-2 text-sm font-medium transition-all shadow-sm shadow-cyan-500/10 group" href="#contact" style={{perspective: `800px`, transformStyle: `preserve-3d`}}>
<i className="w-4 h-4 transform-gpu transition group-hover:[transform:translateZ(8px)]" data-lucide="send"></i>
<span className="transform-gpu transition group-hover:[transform:translateZ(12px)]">Say Hello</span>
</a>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors" id="menuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="mt-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 space-y-1">
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10" href="#projects">Projects</a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10" href="#experience">Experience</a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10" href="#stack">Tech</a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10" href="#contact">Contact</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 md:pt-20 pb-10 md:pb-14">
<div className="grid md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-7 space-y-6" style={{perspective: `1200px`, transformStyle: `preserve-3d`}}>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl pr-3 pl-1 py-1 transform-gpu transition will-change-transform hover:[transform:translateZ(20px)_rotateX(4deg)]">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/20">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
</span>
<span className="text-xs font-medium text-white/70">Open to opportunities & collaborations</span>
<span className="ml-1 inline-flex items-center">
<span className="relative inline-block h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
</span>
</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white transform-gpu transition will-change-transform hover:[transform:translateZ(28px)]">
              Building delightful, performant interfaces with precision
            </h1>
<p className="text-base md:text-lg text-white/70 max-w-2xl transform-gpu transition hover:[transform:translateZ(16px)]">
              I craft scalable frontends with modern stacks — HTML, CSS, JavaScript, React, Next.js, Redux, and MySQL-backed data — delivering accessible, production-grade experiences.
            </p>
<div className="flex flex-wrap items-center gap-3" style={{transformStyle: `preserve-3d`}}>
<a className="group inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 hover:bg-cyan-500/15 text-cyan-200 hover:text-cyan-100 px-4 py-2.5 text-sm font-medium transition-all transform-gpu will-change-transform hover:[transform:translateZ(18px)_rotateX(3deg)]" href="#projects">
<i className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" data-lucide="rocket"></i>
<span>View Projects</span>
<i className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
<a className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white/90 px-4 py-2.5 text-sm font-medium transition-all transform-gpu will-change-transform hover:[transform:translateZ(14px)_rotateX(2deg)]" href="#contact">
<i className="w-4.5 h-4.5" data-lucide="calendar"></i>
<span>Book a chat</span>
</a>
</div>
<div className="flex flex-wrap items-center gap-3 pt-2" style={{transformStyle: `preserve-3d`}}>
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 transform-gpu transition hover:[transform:translateZ(14px)_rotateY(-6deg)]">
<i className="w-4.5 h-4.5 text-white/70" data-lucide="code-2"></i>
<span className="text-xs font-medium text-white/70">HTML, CSS, JavaScript</span>
</div>
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 transform-gpu transition hover:[transform:translateZ(14px)_rotateY(6deg)]">
<i className="w-4.5 h-4.5 text-white/70" data-lucide="atom"></i>
<span className="text-xs font-medium text-white/70">React, Next.js, Redux</span>
</div>
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 transform-gpu transition hover:[transform:translateZ(14px)_rotateX(6deg)]">
<i className="w-4.5 h-4.5 text-white/70" data-lucide="database"></i>
<span className="text-xs font-medium text-white/70">MySQL, REST, API</span>
</div>
</div>
</div>
<div className="md:col-span-5">
<div className="relative max-w-sm md:ml-auto group" data-parallax="" style={{perspective: `1400px`, transformStyle: `preserve-3d`}}>
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-purple-500/30 blur-2xl transform-gpu transition will-change-transform group-hover:[transform:translateZ(40px)]"></div>
<div className="relative rounded-2xl p-2 bg-white/5 border border-white/10 backdrop-blur-2xl transform-gpu transition will-change-transform group-hover:[transform:rotateY(-8deg)_rotateX(5deg)]" style={{transformStyle: `preserve-3d`}}>
<img alt="Profile" className="rounded-xl aspect-[4/5] object-cover border border-white/10 transform-gpu transition group-hover:[transform:translateZ(30px)]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" />

<div className="absolute -top-3 -right-3 h-10 w-10 rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 grid place-items-center shadow-sm transform-gpu animate-bounce" style={{transform: `translateZ(50px)`, animationDuration: `6s`}}>
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2" style={{transformStyle: `preserve-3d`}}>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2 transform-gpu transition group-hover:[transform:translateZ(22px)_rotateY(-6deg)]">
<i className="w-4 h-4 text-white/70" data-lucide="cpu"></i>
<span className="text-xs text-white/70">Frontend</span>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2 transform-gpu transition group-hover:[transform:translateZ(22px)]">
<i className="w-4 h-4 text-white/70" data-lucide="paintbrush"></i>
<span className="text-xs text-white/70">UI/UX</span>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2 transform-gpu transition group-hover:[transform:translateZ(22px)_rotateY(6deg)]">
<i className="w-4 h-4 text-white/70" data-lucide="rocket"></i>
<span className="text-xs text-white/70">Performance</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 md:mt-12 flex items-center gap-4" style={{perspective: `1000px`, transformStyle: `preserve-3d`}}>
<a aria-label="GitHub" className="group inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all transform-gpu hover:[transform:translateZ(14px)_rotateX(4deg)]" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a aria-label="LinkedIn" className="group inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all transform-gpu hover:[transform:translateZ(14px)_rotateX(4deg)]" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a aria-label="Twitter" className="group inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all transform-gpu hover:[transform:translateZ(14px)_rotateX(4deg)]" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a aria-label="Personal Website" className="group inline-flex items-center justify-center h-10 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all gap-2 transform-gpu hover:[transform:translateZ(14px)_rotateX(4deg)]" href="#">
<i className="w-5 h-5" data-lucide="globe"></i>
<span className="text-sm font-medium text-white/80">Website</span>
</a>
</div>
</div>
</section>

<section className="relative scroll-mt-24" id="projects">
<div className="mx-auto max-w-7xl px-6 md:px-10 py-8 md:py-12">
<div className="flex items-end justify-between mb-6 md:mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
<p className="text-white/60 text-sm md:text-base mt-1">A curated selection of recent work.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">
<span>Browse all</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<article className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.25)] transition-all transform-gpu will-change-transform hover:[transform:rotateX(6deg)_rotateY(-6deg)]" data-parallax="" style={{transformStyle: `preserve-3d`, perspective: `1200px`}}>
<div className="relative">
<img alt="SaaS Analytics Dashboard" className="w-full aspect-[16/10] object-cover transform-gpu transition group-hover:[transform:translateZ(26px)]" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 transform-gpu transition group-hover:[transform:translateZ(36px)]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] font-medium text-white/80">Live</span>
</div>
</div>
<div className="p-4" style={{transformStyle: `preserve-3d`}}>
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight transform-gpu transition group-hover:[transform:translateZ(22px)]">SaaS Analytics Dashboard</h3>
<div className="flex items-center gap-2 text-white/60 transform-gpu transition group-hover:[transform:translateZ(18px)]">
<i className="w-4 h-4" data-lucide="atom"></i>
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
</div>
<p className="text-sm text-white/65 mt-2 transform-gpu transition group-hover:[transform:translateZ(12px)]">
                Real-time metrics, custom theming, and role-based access. Built with Next.js, Redux, and SSR for speed.
              </p>
<div className="mt-3 flex flex-wrap gap-2 transform-gpu transition group-hover:[transform:translateZ(10px)]">
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">Next.js</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">Redux</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">MySQL</span>
</div>
<div className="mt-4 flex items-center gap-2 transform-gpu transition group-hover:[transform:translateZ(16px)]">
<a className="inline-flex items-center gap-1.5 text-sm text-cyan-200 hover:text-cyan-100" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
<span>Live</span>
</a>
<a className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
<span>Code</span>
</a>
</div>
</div>
</article>

<article className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.25)] transition-all transform-gpu will-change-transform hover:[transform:rotateX(6deg)_rotateY(6deg)]" data-parallax="" style={{transformStyle: `preserve-3d`, perspective: `1200px`}}>
<div className="relative">
<img alt="E-commerce UI System" className="w-full aspect-[16/10] object-cover transform-gpu transition group-hover:[transform:translateZ(26px)]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 transform-gpu transition group-hover:[transform:translateZ(36px)]">
<span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
<span className="text-[11px] font-medium text-white/80">Case Study</span>
</div>
</div>
<div className="p-4" style={{transformStyle: `preserve-3d`}}>
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight transform-gpu transition group-hover:[transform:translateZ(22px)]">E‑commerce UI System</h3>
<div className="flex items-center gap-2 text-white/60 transform-gpu transition group-hover:[transform:translateZ(18px)]">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<i className="w-4 h-4" data-lucide="box"></i>
</div>
</div>
<p className="text-sm text-white/65 mt-2 transform-gpu transition group-hover:[transform:translateZ(12px)]">
                A modular component system with accessibility, variants, and performance budgets.
              </p>
<div className="mt-3 flex flex-wrap gap-2 transform-gpu transition group-hover:[transform:translateZ(10px)]">
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">React</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">TypeScript</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">Redux</span>
</div>
<div className="mt-4 flex items-center gap-2 transform-gpu transition group-hover:[transform:translateZ(16px)]">
<a className="inline-flex items-center gap-1.5 text-sm text-cyan-200 hover:text-cyan-100" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span>Case Study</span>
</a>
<a className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
<span>Code</span>
</a>
</div>
</div>
</article>

<article className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.25)] transition-all transform-gpu will-change-transform hover:[transform:rotateX(6deg)_rotateY(-6deg)]" data-parallax="" style={{transformStyle: `preserve-3d`, perspective: `1200px`}}>
<div className="relative">
<img alt="Realtime Collaboration" className="w-full aspect-[16/10] object-cover transform-gpu transition group-hover:[transform:translateZ(26px)]" src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 transform-gpu transition group-hover:[transform:translateZ(36px)]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] font-medium text-white/80">Live</span>
</div>
</div>
<div className="p-4" style={{transformStyle: `preserve-3d`}}>
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight transform-gpu transition group-hover:[transform:translateZ(22px)]">Realtime Collaboration</h3>
<div className="flex items-center gap-2 text-white/60 transform-gpu transition group-hover:[transform:translateZ(18px)]">
<i className="w-4 h-4" data-lucide="users"></i>
<i className="w-4 h-4" data-lucide="bolt"></i>
</div>
</div>
<p className="text-sm text-white/65 mt-2 transform-gpu transition group-hover:[transform:translateZ(12px)]">
                Multi‑user editor with optimistic UI, websockets, and offline sync.
              </p>
<div className="mt-3 flex flex-wrap gap-2 transform-gpu transition group-hover:[transform:translateZ(10px)]">
<span className="text:[11px] text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">React</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">Next.js</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">MySQL</span>
</div>
<div className="mt-4 flex items-center gap-2 transform-gpu transition group-hover:[transform:translateZ(16px)]">
<a className="inline-flex items-center gap-1.5 text-sm text-cyan-200 hover:text-cyan-100" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
<span>Live</span>
</a>
<a className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
<span>Code</span>
</a>
</div>
</div>
</article>

<article className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.25)] transition-all lg:col-span-3 transform-gpu will-change-transform hover:[transform:rotateX(5deg)]" data-parallax="" style={{transformStyle: `preserve-3d`, perspective: `1400px`}}>
<div className="relative">
<img alt="Design System Starter" className="w-full aspect-[16/6] object-cover transform-gpu transition group-hover:[transform:translateZ(26px)]" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1800&auto=format&fit=crop" />
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 transform-gpu transition group-hover:[transform:translateZ(36px)]">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
<span className="text-[11px] font-medium text-white/80">Component Kit</span>
</div>
</div>
<div className="p-4" style={{transformStyle: `preserve-3d`}}>
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight transform-gpu transition group-hover:[transform:translateZ(22px)]">Design System Starter</h3>
<div className="flex items-center gap-2 text-white/60 transform-gpu transition group-hover:[transform:translateZ(18px)]">
<i className="w-4 h-4" data-lucide="layout"></i>
<i className="w-4 h-4" data-lucide="accessibility"></i>
</div>
</div>
<p className="text-sm text-white/65 mt-2 transform-gpu transition group-hover:[transform:translateZ(12px)]">
                Tokenized styles, accessibility-first components, theming, and docs powered by MDX.
              </p>
<div className="mt-3 flex flex-wrap gap-2 transform-gpu transition group-hover:[transform:translateZ(10px)]">
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">React</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">Storybook</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">TypeScript</span>
</div>
<div className="mt-4 flex items-center gap-2 transform-gpu transition group-hover:[transform:translateZ(16px)]">
<a className="inline-flex items-center gap-1.5 text-sm text-cyan-200 hover:text-cyan-100" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span>Docs</span>
</a>
<a className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
<span>Code</span>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative scroll-mt-24" id="experience">
<div className="mx-auto max-w-7xl px-6 md:px-10 py-8 md:py-12">
<div className="mb-6 md:mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
<p className="text-white/60 text-sm md:text-base mt-1">Impactful roles and collaborations.</p>
</div>
<div className="relative">
<div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
<div className="space-y-6">

<div className="relative pl-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-colors transform-gpu hover:[transform:translateZ(16px)]" style={{perspective: `800px`}}>
<div className="absolute left-[14px] top-6 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 animate-pulse"></div>
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center transform-gpu transition hover:[transform:rotateY(-8deg)_translateZ(10px)]">
<span className="text-xs font-semibold tracking-tight">AL</span>
</div>
<div>
<h3 className="text-base md:text-lg font-semibold tracking-tight">Senior Frontend Developer</h3>
<p className="text-xs md:text-sm text-white/60">Acme Labs • 2023 — Present</p>
</div>
</div>
<div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70">
<i className="w-4 h-4" data-lucide="atom"></i> React
                  <i className="w-4 h-4 ml-3" data-lucide="server"></i> Next.js
                  <i className="w-4 h-4 ml-3" data-lucide="database"></i> MySQL
                </div>
</div>
<ul className="mt-3 space-y-1.5 text-sm text-white/70">
<li className="flex gap-2"><i className="w-4 h-4 mt-0.5 text-emerald-300" data-lucide="check"></i> Shipped a multi-tenant dashboard with SSR and edge caching, improving TTFB by 38%.</li>
<li className="flex gap-2"><i className="w-4 h-4 mt-0.5 text-emerald-300" data-lucide="check"></i> Built a component library with tokens and a11y patterns adopted across teams.</li>
</ul>
</div>

<div className="relative pl-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-colors transform-gpu hover:[transform:translateZ(16px)]" style={{perspective: `800px`}}>
<div className="absolute left-[14px] top-6 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 animate-pulse"></div>
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center transform-gpu transition hover:[transform:rotateY(-8deg)_translateZ(10px)]">
<span className="text-xs font-semibold tracking-tight">SF</span>
</div>
<div>
<h3 className="text-base md:text-lg font-semibold tracking-tight">Frontend Engineer</h3>
<p className="text-xs md:text-sm text-white/60">Studio Forge • 2021 — 2023</p>
</div>
</div>
<div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70">
<i className="w-4 h-4" data-lucide="layers"></i> Redux
                  <i className="w-4 h-4 ml-3" data-lucide="atom"></i> React
                </div>
</div>
<ul className="mt-3 space-y-1.5 text-sm text-white/70">
<li className="flex gap-2"><i className="w-4 h-4 mt-0.5 text-emerald-300" data-lucide="check"></i> Implemented micro‑frontend architecture with shared state and routing.</li>
<li className="flex gap-2"><i className="w-4 h-4 mt-0.5 text-emerald-300" data-lucide="check"></i> Reduced CLS by 62% with strategic preloading and layout stabilization.</li>
</ul>
</div>

<div className="relative pl-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-colors transform-gpu hover:[transform:translateZ(16px)]" style={{perspective: `800px`}}>
<div className="absolute left-[14px] top-6 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 animate-pulse"></div>
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center transform-gpu transition hover:[transform:rotateY(-8deg)_translateZ(10px)]">
<span className="text-xs font-semibold tracking-tight">FL</span>
</div>
<div>
<h3 className="text-base md:text-lg font-semibold tracking-tight">Freelance</h3>
<p className="text-xs md:text-sm text-white/60">2019 — 2021</p>
</div>
</div>
<div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70">
<i className="w-4 h-4" data-lucide="globe-2"></i> Web Apps
                </div>
</div>
<ul className="mt-3 space-y-1.5 text-sm text-white/70">
<li className="flex gap-2"><i className="w-4 h-4 mt-0.5 text-emerald-300" data-lucide="check"></i> Delivered 15+ client projects with design systems, dashboards, and marketing sites.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-24" id="stack">
<div className="mx-auto max-w-7xl px-6 md:px-10 py-8 md:py-12">
<div className="mb-6 md:mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Tech Stack</h2>
<p className="text-white/60 text-sm md:text-base mt-1">Core tools and frameworks I use every day.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{perspective: `1100px`, transformStyle: `preserve-3d`}}>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-colors transform-gpu will-change-transform hover:[transform:translateZ(18px)_rotateX(4deg)]">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-white/70" data-lucide="braces"></i>
<h3 className="text-base font-semibold tracking-tight">HTML & CSS</h3>
</div>
<span className="text-xs text-white/60">Expert</span>
</div>
<p className="text-sm text-white/65 mt-2">Semantic markup, responsive design, a11y, and modern layout systems.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-colors transform-gpu will-change-transform hover:[transform:translateZ(18px)_rotateX(4deg)]">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-white/70" data-lucide="file-code"></i>
<h3 className="text-base font-semibold tracking-tight">JavaScript</h3>
</div>
<span className="text-xs text-white/60">Advanced</span>
</div>
<p className="text-sm text-white/65 mt-2">Modern ES, state management, performance profiling, and testing.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-colors transform-gpu will-change-transform hover:[transform:translateZ(18px)_rotateX(4deg)]">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-white/70" data-lucide="atom"></i>
<h3 className="text-base font-semibold tracking-tight">React & Next.js</h3>
</div>
<span className="text-xs text-white/60">Advanced</span>
</div>
<p className="text-sm text-white/65 mt-2">Server components, SSR/ISR, routing, hooks architecture, DX.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-colors transform-gpu will-change-transform hover:[transform:translateZ(18px)_rotateX(4deg)]">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-white/70" data-lucide="layers"></i>
<h3 className="text-base font-semibold tracking-tight">Redux & MySQL</h3>
</div>
<span className="text-xs text-white/60">Strong</span>
</div>
<p className="text-sm text-white/65 mt-2">State orchestration with Redux Toolkit; schema design and SQL with MySQL.</p>
</div>
</div>

<div className="mt-5 flex flex-wrap gap-2" style={{perspective: `900px`}}>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">HTML</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">CSS</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">JavaScript</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">React</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">Next.js</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">Redux</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">MySQL</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">REST</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">Accessibility</span>
<span className="text-[11px] font-medium rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/70 transform-gpu transition hover:[transform:translateZ(10px)]">Testing</span>
</div>
</div>
</section>

<section className="relative scroll-mt-24" id="contact">
<div className="mx-auto max-w-7xl px-6 md:px-10 py-8 md:py-12">
<div className="mb-6 md:mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
<p className="text-white/60 text-sm md:text-base mt-1">Let’s build something exceptional.</p>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 space-y-4 transform-gpu will-change-transform hover:[transform:translateZ(16px)]" style={{perspective: `1000px`}}>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-white/60 mb-1.5">Name</label>
<input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/40 transition" placeholder="Your name" type="text" />
</div>
<div>
<label className="block text-xs text-white/60 mb-1.5">Email</label>
<input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/40 transition" placeholder="name@company.com" type="email" />
</div>
</div>
<div>
<label className="block text-xs text-white/60 mb-1.5">Subject</label>
<input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/40 transition" placeholder="Project, role, or topic" type="text" />
</div>
<div>
<label className="block text-xs text-white/60 mb-1.5">Message</label>
<textarea className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/40 transition" placeholder="A brief about your idea..." rows="5"></textarea>
</div>
<div className="flex items-center justify-between">

<label className="inline-flex items-center gap-3 cursor-pointer select-none">
<span className="text-sm text-white/70">Available for freelance</span>
<input className="peer sr-only" type="checkbox" />
<span className="relative h-6 w-11 rounded-full bg-white/10 border border-white/10 transition-colors peer-checked:bg-emerald-400/20 peer-checked:border-emerald-400/30">
<span className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white/70 transition-all peer-checked:bg-emerald-300 peer-checked:left-6"></span>
</span>
</label>
<button className="group inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 hover:bg-cyan-500/15 text-cyan-200 hover:text-cyan-100 px-4 py-2.5 text-sm font-medium transition-all transform-gpu hover:[transform:translateZ(14px)_rotateX(2deg)]" type="submit">
<i className="w-4.5 h-4.5" data-lucide="send"></i>
<span>Send Message</span>
</button>
</div>
</form>

<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transform-gpu hover:[transform:translateZ(14px)]">
<h3 className="text-base font-semibold tracking-tight">Let’s talk</h3>
<p className="text-sm text-white/65 mt-2">
                I typically respond within 24 hours. Include timelines, goals, and any references for a tailored response.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 hover:bg-black/40 px-3 py-2 text-sm transition transform-gpu hover:[transform:translateZ(10px)_rotateX(2deg)]" href="mailto:hello@example.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                  hello@example.com
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 hover:bg-black/40 px-3 py-2 text-sm transition transform-gpu hover:[transform:translateZ(10px)_rotateX(2deg)]" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
                  +1 (234) 567-890
                </a>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transform-gpu hover:[transform:translateZ(14px)]">
<h3 className="text-base font-semibold tracking-tight">Availability</h3>
<div className="mt-3 flex items-center gap-3">
<span className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 px-3 py-1.5 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  Taking new projects
                </span>
<span className="text-xs text-white/60">Start in 2 weeks</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transform-gpu hover:[transform:translateZ(14px)]">
<h3 className="text-base font-semibold tracking-tight">Social</h3>
<div className="mt-3 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 hover:bg-black/40 px-3 py-2 text-sm transition transform-gpu hover:[transform:translateZ(10px)]" href="#">
<i className="w-4 h-4" data-lucide="github"></i> GitHub
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 hover:bg-black/40 px-3 py-2 text-sm transition transform-gpu hover:[transform:translateZ(10px)]" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i> LinkedIn
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 hover:bg-black/40 px-3 py-2 text-sm transition transform-gpu hover:[transform:translateZ(10px)]" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i> Twitter
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-6 md:mt-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{perspective: `900px`}}>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 grid place-items-center transform-gpu transition hover:[transform:translateZ(12px)_rotateY(-6deg)]">
<span className="text-[13px] font-semibold tracking-tight">FD</span>
</div>
<p className="text-xs text-white/60">© <span id="year"></span> Frontend Developer. All rights reserved.</p>
</div>
<div className="flex items-center gap-2">
<a className="text-xs text-white/70 hover:text-white px-2 py-1 rounded-md hover:bg-white/5 transition transform-gpu hover:[transform:translateZ(8px)]" href="#projects">Projects</a>
<a className="text-xs text-white/70 hover:text-white px-2 py-1 rounded-md hover:bg-white/5 transition transform-gpu hover:[transform:translateZ(8px)]" href="#experience">Experience</a>
<a className="text-xs text-white/70 hover:text-white px-2 py-1 rounded-md hover:bg-white/5 transition transform-gpu hover:[transform:translateZ(8px)]" href="#stack">Tech</a>
<a className="text-xs text-white/70 hover:text-white px-2 py-1 rounded-md hover:bg-white/5 transition transform-gpu hover:[transform:translateZ(8px)]" href="#contact">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
