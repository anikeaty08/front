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



      // Util: clamp
      const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu
      const mobileNav = document.getElementById('mobileNav');
      const mobilePanel = document.getElementById('mobilePanel');
      const openBtn = document.getElementById('menuBtn');
      const closeBtn = document.getElementById('closeMenu');
      const toggleMobile = (open) => {
        if (open) {
          mobileNav.classList.remove('hidden');
          mobileNav.classList.remove('pointer-events-none');
          requestAnimationFrame(() => {
            mobilePanel.classList.remove('opacity-0', '-translate-y-3', 'scale-[0.98]');
          });
        } else {
          mobilePanel.classList.add('opacity-0', '-translate-y-3', 'scale-[0.98]');
          setTimeout(() => {
            mobileNav.classList.add('hidden');
            mobileNav.classList.add('pointer-events-none');
          }, 200);
        }
      };
      openBtn?.addEventListener('click', () => toggleMobile(true));
      closeBtn?.addEventListener('click', () => toggleMobile(false));
      mobileNav?.addEventListener('click', (e) => {
        if (e.target === mobileNav) toggleMobile(false);
      });
      mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMobile(false)));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMobile(false);
      });

      // Smooth scroll offset for fixed header
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (!id || id === '#') return;
          const el = document.querySelector(id);
          if (!el) return;
          e.preventDefault();
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        });
      });

      // Typed effect
      (function(){
        const el = document.getElementById('typed');
        if (!el) return;
        const phrases = ['Frontend Engineer', 'Design Systems Lead', 'Performance Advocate', 'Type‑Safe Full‑stack'];
        let pi = 0, ci = 0, dir = 1;
        const tick = () => {
          const p = phrases[pi];
          ci += dir;
          el.textContent = p.slice(0, ci);
          if (dir > 0 && ci === p.length) {
            dir = -1;
            setTimeout(tick, 1200);
            return;
          }
          if (dir < 0 && ci === 0) {
            dir = 1; pi = (pi + 1) % phrases.length;
            setTimeout(tick, 300);
            return;
          }
          setTimeout(tick, dir > 0 ? 60 : 35);
        };
        setTimeout(tick, 500);
      })();

      // Parallax accents
      const pxEls = [...document.querySelectorAll('[data-parallax]')];
      let lastY = window.scrollY;
      const parallax = () => {
        const y = window.scrollY;
        if (Math.abs(y - lastY) < 0.5) { requestAnimationFrame(parallax); return; }
        lastY = y;
        pxEls.forEach(el => {
          const speed = parseFloat(el.dataset.speed || '0.1');
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
        requestAnimationFrame(parallax);
      };
      requestAnimationFrame(parallax);

      // Reveal on scroll
      const revealEls = document.querySelectorAll('[data-reveal]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0','translate-y-6','blur-sm');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      revealEls.forEach((el) => io.observe(el));

      // Hero video play/pause
      const heroVideo = document.getElementById('heroVideo');
      const heroBtn = document.getElementById('heroVideoBtn');
      const heroIcon = document.getElementById('heroVideoIcon');
      const playHero = async () => {
        try {
          await heroVideo.play();
          heroVideo.classList.remove('opacity-0');
          heroBtn.classList.add('opacity-0', 'pointer-events-none');
          heroIcon?.setAttribute('data-lucide', 'pause');
          window.lucide?.createIcons();
        } catch (e) {
          // Autoplay might be blocked. Keep button visible.
        }
      };
      const pauseHero = () => {
        heroVideo.pause();
        heroVideo.classList.add('opacity-0');
        heroBtn.classList.remove('opacity-0', 'pointer-events-none');
        heroIcon?.setAttribute('data-lucide', 'play');
        window.lucide?.createIcons();
      };
      heroBtn?.addEventListener('click', () => {
        if (heroVideo.paused) playHero(); else pauseHero();
      });

      // Project video toggles (delegated)
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-video-toggle]');
        if (!btn) return;
        const sel = btn.getAttribute('data-video-toggle');
        const vid = document.querySelector(sel);
        if (!vid) return;
        if (vid.paused) {
          vid.play();
          btn.classList.add('opacity-0','pointer-events-none');
        } else {
          vid.pause();
          btn.classList.remove('opacity-0','pointer-events-none');
        }
      });

      // Horizontal scrollers controls
      const makeScroller = (wrapId, prevId, nextId) => {
        const scroller = document.getElementById(wrapId);
        const prev = document.getElementById(prevId);
        const next = document.getElementById(nextId);
        if (!scroller) return;
        const cardWidth = () => scroller.querySelector(':scope > *')?.getBoundingClientRect().width || 320;
        prev?.addEventListener('click', () => scroller.scrollBy({ left: -cardWidth() - 16, behavior: 'smooth' }));
        next?.addEventListener('click', () => scroller.scrollBy({ left: cardWidth() + 16, behavior: 'smooth' }));
      };
      makeScroller('projScroller','projPrev','projNext');
      makeScroller('testScroller','testPrev','testNext');

      // Testimonials auto-slide (loop)
      (function(){
        const scroller = document.getElementById('testScroller');
        if (!scroller) return;
        let paused = false;
        let timer;
        const step = () => {
          if (paused) return;
          const w = scroller.querySelector(':scope > *')?.getBoundingClientRect().width || 400;
          const max = scroller.scrollWidth - scroller.clientWidth;
          const next = scroller.scrollLeft + w + 16;
          scroller.scrollTo({ left: next > max ? 0 : next, behavior: 'smooth' });
        };
        const start = () => { clearInterval(timer); timer = setInterval(step, 3500); };
        const stop = () => { clearInterval(timer); };
        scroller.addEventListener('mouseenter', () => { paused = true; stop(); });
        scroller.addEventListener('mouseleave', () => { paused = false; start(); });
        scroller.addEventListener('pointerdown', () => { paused = true; stop(); });
        scroller.addEventListener('pointerup', () => { paused = false; start(); });
        document.getElementById('testPrev')?.addEventListener('click', () => { paused = true; stop(); setTimeout(() => { paused = false; start(); }, 5000); });
        document.getElementById('testNext')?.addEventListener('click', () => { paused = true; stop(); setTimeout(() => { paused = false; start(); }, 5000); });
        start();
      })();

      // Contact form (demo)
      const form = document.getElementById('contactForm');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.classList.add('opacity-80','cursor-not-allowed');
        // Fake async submit
        setTimeout(() => {
          btn.disabled = false;
          btn.classList.remove('opacity-80','cursor-not-allowed');
          toast('Message sent! I will get back to you soon.');
          form.reset();
        }, 900);
      });

      // Toast
      function toast(msg) {
        const t = document.createElement('div');
        t.setAttribute('role','status');
        t.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md shadow-xl';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => { t.classList.add('opacity-0','translate-y-2'); }, 1800);
        setTimeout(() => { t.remove(); }, 2200);
      }

      // Back to top
      const toTop = document.getElementById('toTop');
      const onScroll = () => {
        const show = window.scrollY > 400;
        toTop?.classList.toggle('hidden', !show);
      };
      toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      document.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    
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
      

<header className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 backdrop-blur-xl">

<a className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition" href="#hero">
<span className="text-sm text-white/80" data-element-id="aura-emfw3f9j9" style={{fontFamily: '\'Sora\', system-ui', fontWeight: '500'}}>Himel</span>
</a>

<nav className="hidden md:flex items-center gap-1" style={{fontFamily: '\'Inter\', system-ui'}}>
<a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition whitespace-nowrap" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition whitespace-nowrap" href="#skills">Skills</a>
<a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition whitespace-nowrap" href="#projects">Projects</a>
<a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition whitespace-nowrap" href="#testimonials">Testimonials</a>
<a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition whitespace-nowrap" href="#connect">Connect</a>
</nav>

<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" rel="noopener" style={{fontFamily: '\'Inter\', system-ui', fontWeight: '500'}} target="_blank">
<svg className="lucide lucide-download mr-2 h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Download CV
            </a>
<a className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-white text-black px-3 py-2 text-sm hover:bg-white/90 hover:outline hover:outline-2 hover:outline-white/10 transition" href="#connect" style={{fontFamily: '\'Inter\', system-ui', fontWeight: '600'}}>
<svg className="lucide lucide-send mr-2 h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Contact
            </a>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" id="menuBtn">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="pointer-events-none fixed inset-0 z-40 hidden" id="mobileNav">
<div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>
<div className="mx-auto mt-20 w-[92%] max-w-md opacity-0 -translate-y-3 scale-[0.98] transition-all duration-200 ease-out rounded-2xl bg-[#0f1116]/95 border border-white/10 shadow-2xl backdrop-blur-xl" id="mobilePanel">
<div className="px-4 py-4 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 grid place-items-center text-white/80" style={{fontFamily: '\'Sora\'', fontWeight: '600', letterSpacing: '-0.02em'}}>M</div>
<span className="text-base text-white/85" style={{fontFamily: '\'Sora\'', fontWeight: '600', letterSpacing: '-0.02em'}}>Menu</span>
</div>
<button aria-label="Close menu" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" id="closeMenu">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<nav className="px-4 py-3 grid grid-cols-2 gap-2" style={{fontFamily: '\'Inter\', system-ui'}}>
<a className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-white/85 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition" href="#about">
<svg className="lucide lucide-user" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> About
            </a>
<a className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-white/85 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition" href="#skills">
<svg className="lucide lucide-code-2" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> Skills
            </a>
<a className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-white/85 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition" href="#projects">
<svg className="lucide lucide-grid" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg> Projects
            </a>
<a className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-white/85 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition" href="#testimonials">
<svg className="lucide lucide-quote" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg> Testimonials
            </a>
<a className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-white/85 hover:text-white hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition col-span-2" href="#connect">
<svg className="lucide lucide-send" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Connect
            </a>
</nav>
<div className="px-4 pb-4">
<div className="grid grid-cols-2 gap-2">
<a className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm hover:bg-white/[0.08] transition whitespace-nowrap" href="https://github.com" rel="noopener" target="_blank">
<svg className="lucide lucide-github mr-2 h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> GitHub
              </a>
<a className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm hover:bg-white/[0.08] transition whitespace-nowrap" href="https://www.linkedin.com" rel="noopener" target="_blank">
<svg className="lucide lucide-linkedin mr-2 h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
              </a>
</div>
</div>
</div>
</div>
</header>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" data-parallax="" data-speed="0.15"></div>
<div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" data-parallax="" data-speed="0.12"></div>
<div className="absolute top-[60%] left-[10%] h-64 w-64 rounded-full bg-emerald-500/16 blur-3xl" data-parallax="" data-speed="0.18"></div>
</div>

<section className="relative pt-[108px]" id="hero">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7 space-y-6" style={{fontFamily: '\'Sora\', system-ui'}}>
<p className="text-xs uppercase tracking-widest text-white/60">Portfolio</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>
              Crafting delightful systems and interfaces
            </h1>
<p className="text-base sm:text-lg text-white/70" style={{fontFamily: '\'Inter\', system-ui', fontWeight: '400'}}>
              I design and build products with performance, accessibility, and beauty in mind.
            </p>

<div className="flex flex-wrap items-center gap-3">
<div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
<svg className="lucide lucide-sparkles h-4 w-4 mr-2 text-amber-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm sm:text-base text-white/80 whitespace-nowrap overflow-hidden" id="typed">F</span>
<span className="ml-1 inline-block h-5 w-[2px] bg-white/80 animate-pulse"></span>
</div>

<span className="inline-flex items-center rounded-full border border-emerald-500/20 text-emerald-300 bg-emerald-500/10 px-3 py-1.5 text-xs" style={{fontFamily: '\'Inter\'', fontWeight: '500'}}>
<svg className="lucide lucide-badge-check mr-2 h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Available for freelance
              </span>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75" style={{fontFamily: '\'IBM Plex Mono\''}}>
<svg className="lucide lucide-map-pin mr-2 h-4 w-4 text-sky-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Remote • GMT±2
              </span>
</div>

<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-white text-black px-5 py-3 text-sm hover:bg-white/90 hover:outline hover:outline-2 hover:outline-white/10 transition" href="#projects" style={{fontFamily: '\'Inter\', system-ui', fontWeight: '600'}}>
<svg className="lucide lucide-grid mr-2 h-4 w-4" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
                View Projects
              </a>
<a className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm text-white hover:bg-white/[0.08] hover:outline hover:outline-2 hover:outline-white/10 transition" href="#connect" style={{fontFamily: '\'Inter\', system-ui', fontWeight: '500'}}>
<svg className="lucide lucide-message-square mr-2 h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                Get in Touch
              </a>
<a className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm text-white hover:bg-white/[0.08] hover:outline hover:outline-2 hover:outline-white/10 transition" href="mailto:hello@example.com" style={{fontFamily: '\'Inter\', system-ui', fontWeight: '500'}}>
<svg className="lucide lucide-mail mr-2 h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@example.com
              </a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Performance</p>
<p className="text-xs text-white/60">P95 &lt; 200ms APIs</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Accessibility</p>
<p className="text-xs text-white/60">WCAG 2.1 AA</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Reliability</p>
<p className="text-xs text-white/60">99.95% uptime</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Impact</p>
<p className="text-xs text-white/60">25k+ users</p>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2">
<div className="relative aspect-[4/3] overflow-hidden rounded-xl">
<img alt="Workspace" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-black/50 backdrop-blur-md p-3" data-parallax="" data-speed="0.25">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity h-4 w-4 text-emerald-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<p className="text-xs text-white/80" style={{fontFamily: '\'IBM Plex Mono\', monospace'}}>Live preview accelerated</p>
</div>
</div>

<button className="group absolute inset-0 grid place-items-center" id="heroVideoBtn">
<span className="inline-flex items-center justify-center rounded-full bg-black/60 p-4 outline outline-1 outline-white/20 hover:bg-black/70 transition">
<svg className="lucide lucide-play h-7 w-7 text-white" data-lucide="play" fill="none" height="24" id="heroVideoIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<video className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500" id="heroVideo" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>
</div>

<div className="mt-12 border-t border-white/10"></div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<div className="aspect-[4/5] overflow-hidden rounded-xl">
<img alt="Portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="lg:col-span-7 space-y-6 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="" style={{fontFamily: '\'Inter\', system-ui'}}>
<h2 className="text-3xl sm:text-4xl tracking-tight text-white" style={{fontFamily: '\'Sora\', system-ui', fontWeight: '600', letterSpacing: '-0.02em'}}>About Me</h2>
<p className="text-white/75">
              I’m a product-focused developer with a background in design systems and full-stack engineering. I care about clear UX, high performance, and clean interfaces.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-briefcase h-4 w-4 text-sky-300" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<p className="text-sm text-white" style={{fontWeight: '600'}}>Services</p>
</div>
<ul className="space-y-2 text-xs text-white/70">
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-3.5 w-3.5 mt-0.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>UI Engineering</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-3.5 w-3.5 mt-0.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>Design Systems</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-3.5 w-3.5 mt-0.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>Performance Audits</span></li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-building-2 h-4 w-4 text-amber-300" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<p className="text-sm text-white" style={{fontWeight: '600'}}>Sectors</p>
</div>
<ul className="space-y-2 text-xs text-white/70">
<li className="flex items-start gap-2"><svg className="lucide lucide-dot h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg><span>SaaS &amp; Platforms</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-dot h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg><span>Fintech</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-dot h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg><span>Developer Tools</span></li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-id-card h-4 w-4 text-fuchsia-300" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
<p className="text-sm text-white" style={{fontWeight: '600'}}>Currently</p>
</div>
<ul className="space-y-2 text-xs text-white/70">
<li className="flex items-start gap-2"><svg className="lucide lucide-user-round h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg><span>Sr. Frontend Engineer</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-globe-2 h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg><span>Remote • GMT±2</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-calendar-check h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg><span>Open to new work</span></li>
</ul>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<p className="text-2xl tracking-tight text-white" style={{fontFamily: '\'Sora\'', fontWeight: '600'}}>7+</p>
<p className="text-xs text-white/60">Years Experience</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<p className="text-2xl tracking-tight text-white" style={{fontFamily: '\'Sora\'', fontWeight: '600'}}>36</p>
<p className="text-xs text-white/60">Projects</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<p className="text-2xl tracking-tight text-white" style={{fontFamily: '\'Sora\'', fontWeight: '600'}}>14</p>
<p className="text-xs text-white/60">Teams</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<p className="text-2xl tracking-tight text-white" style={{fontFamily: '\'Sora\'', fontWeight: '600'}}>100%</p>
<p className="text-xs text-white/60">Commitment</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70" style={{fontFamily: '\'IBM Plex Mono\', monospace'}}><svg className="lucide lucide-cpu h-4 w-4 text-emerald-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> Systems</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70" style={{fontFamily: '\'IBM Plex Mono\', monospace'}}><svg className="lucide lucide-palette h-4 w-4 text-fuchsia-300" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Design</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70" style={{fontFamily: '\'IBM Plex Mono\', monospace'}}><svg className="lucide lucide-bolt h-4 w-4 text-amber-300" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg> Performance</span>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-trophy h-4 w-4 text-emerald-300" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<p className="text-sm text-white" style={{fontWeight: '600'}}>Certifications</p>
</div>
<ul className="space-y-2 text-xs text-white/70">
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-3.5 w-3.5 mt-0.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>Web Accessibility Specialist</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-3.5 w-3.5 mt-0.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>Cloud Practitioner</span></li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-graduation-cap h-4 w-4 text-sky-300" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<p className="text-sm text-white" style={{fontWeight: '600'}}>Education</p>
</div>
<ul className="space-y-2 text-xs text-white/70">
<li className="flex items-start gap-2"><svg className="lucide lucide-dot h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg><span>BSc Computer Science</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-dot h-3.5 w-3.5 mt-0.5 text-white/50" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg><span>Human‑Computer Interaction coursework</span></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-12 border-t border-white/10"></div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="skills" style={{fontFamily: '\'Space Grotesk\', system-ui'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 flex items-end justify-between">
<div className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Skills</h2>
<p className="text-white/70 text-sm sm:text-base" style={{fontFamily: '\'Inter\', system-ui'}}>A concise map of languages, frameworks, tooling, and practices.</p>
</div>
<a className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" href="#projects">
<svg className="lucide lucide-arrow-right mr-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Explore Projects
          </a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-5" data-reveal="">
<div className="flex items-center gap-3">
<svg className="lucide lucide-layers h-5 w-5 text-sky-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<p className="text-base text-white" style={{fontWeight: '600'}}>Core Stack</p>
</div>
<p className="mt-2 text-sm text-white/70">Languages and frameworks I use daily.</p>
<div className="mt-4 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-white" style={{fontWeight: '600'}}>TypeScript</p>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[90%] rounded-full bg-sky-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-white" style={{fontWeight: '600'}}>React</p>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[88%] rounded-full bg-blue-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-white" style={{fontWeight: '600'}}>Node.js</p>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[82%] rounded-full bg-emerald-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-white" style={{fontWeight: '600'}}>PostgreSQL</p>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[78%] rounded-full bg-teal-400"></div>
</div>
</div>
</div>
</div>

<div className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-5" data-reveal="">
<div className="flex items-center gap-3">
<svg className="lucide lucide-wrench h-5 w-5 text-amber-300" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<p className="text-base text-white" style={{fontWeight: '600'}}>Tooling &amp; Platforms</p>
</div>
<p className="mt-2 text-sm text-white/70">Build, test, deploy, and observe.</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs" style={{fontFamily: '\'Inter\''}}>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Vite</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Webpack</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Jest</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Playwright</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Docker</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">K8s</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Cloudflare</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">AWS</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Sentry</span>
<span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">Datadog</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-rocket h-4 w-4 text-amber-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<p className="text-white" style={{fontWeight: '600'}}>CI/CD</p>
</div>
<p className="mt-1 text-xs text-white/60">Automated pipelines &amp; previews</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity h-4 w-4 text-emerald-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<p className="text-white" style={{fontWeight: '600'}}>Observability</p>
</div>
<p className="mt-1 text-xs text-white/60">Logs, traces, uptime</p>
</div>
</div>
</div>

<div className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-5" data-reveal="">
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield-check h-5 w-5 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-base text-white" style={{fontWeight: '600'}}>Practices</p>
</div>
<p className="mt-2 text-sm text-white/70">Quality, accessibility, and delivery.</p>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex items-start gap-2"><svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>WCAG AA compliance across core flows</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Bundle budgets, code‑split, perf profiling</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Design tokens &amp; component libraries</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check-circle mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Strong DX: linting, type‑safety, CI</span></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-white/10"></div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="projects" style={{fontFamily: '\'Sora\', system-ui'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-6 flex items-end justify-between">
<div className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Projects</h2>
<p className="text-white/70 text-sm sm:text-base" style={{fontFamily: '\'Inter\', system-ui'}}>Swipe to explore selected work with key outcomes and links.</p>
</div>
<div className="flex items-center gap-2">
<button aria-label="Previous" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" id="projPrev">
<svg className="lucide lucide-arrow-left" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" id="projNext">
<svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4" id="projScroller">

<article className="snap-start min-w-[85vw] sm:min-w-[460px] rounded-2xl border border-white/10 bg-white/[0.02] p-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<a className="block group" href="https://github.com" rel="noopener" target="_blank">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl">
<img alt="Dashboard project" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
<div className="flex items-center gap-2">
<svg className="lucide lucide-layout-grid h-4 w-4 text-sky-300" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<h3 className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Analytics Dashboard</h3>
</div>
<p className="mt-1 text-xs text-white/70" style={{fontFamily: '\'Inter\''}}>Real‑time metrics with role‑based access.</p>
</div>
</div>
</a><div className="p-4"><a className="block group" href="https://github.com" rel="noopener" target="_blank">
<div className="flex flex-wrap gap-2 text-[11px] text-white/70">
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">Frontend</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">TypeScript</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">React</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">Perf: 100kb</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/75">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-users h-3.5 w-3.5 mr-1 text-emerald-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>25k users</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-activity h-3.5 w-3.5 mr-1 text-sky-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>P95 180ms</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-shield h-3.5 w-3.5 mr-1 text-amber-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>SOC2 ready</div>
</div>
</a><div className="mt-3 flex items-center gap-3"><a className="block group" href="https://github.com" rel="noopener" target="_blank">
</a><a className="inline-flex items-center text-xs text-white/80 hover:text-white hover:underline" href="#">
<svg className="lucide lucide-github mr-1 h-3.5 w-3.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Code
                  </a>
<a className="inline-flex items-center text-xs text-white/80 hover:text-white hover:underline" href="#">
<svg className="lucide lucide-external-link mr-1 h-3.5 w-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> Live
                  </a>
<a className="inline-flex items-center text-xs text-white/80 hover:text-white hover:underline" href="#">
<svg className="lucide lucide-file-text mr-1 h-3.5 w-3.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Case Study
                  </a>
</div>
</div>
</article>

<article className="snap-start min-w-[85vw] sm:min-w-[460px] rounded-2xl border border-white/10 bg-white/[0.02] p-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl">
<video className="h-full w-full object-cover" id="projVideo1" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4"/>
</video>
<button aria-label="Play video" className="absolute inset-0 grid place-items-center" data-video-toggle="#projVideo1">
<span className="inline-flex items-center justify-center rounded-full bg-black/60 p-4 outline outline-1 outline-white/20 hover:bg-black/70 transition">
<svg className="lucide lucide-play h-7 w-7 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
<div className="flex items-center gap-2">
<svg className="lucide lucide-film h-4 w-4 text-amber-300" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<h3 className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Motion Preview</h3>
</div>
<p className="mt-1 text-xs text-white/70" style={{fontFamily: '\'Inter\''}}>Micro‑interactions &amp; flows demo.</p>
</div>
</div>
<div className="p-4">
<div className="flex flex-wrap gap-2 text-[11px] text-white/70">
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">Prototyper</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">CSS</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">JS</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">60 FPS</span>
</div>
<div className="mt-3 flex items-center gap-3">
<a className="inline-flex items-center text-xs text-white/80 hover:text-white hover:underline" href="#">
<svg className="lucide lucide-file-text mr-1 h-3.5 w-3.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Case Study
                </a>
<a className="inline-flex items-center text-xs text-white/80 hover:text-white hover:underline" href="#">
<svg className="lucide lucide-external-link mr-1 h-3.5 w-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> Live
                </a>
</div>
</div>
</article>

<article className="snap-start min-w-[85vw] sm:min-w-[460px] rounded-2xl border border-white/10 bg-white/[0.02] p-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<a className="block group" href="https://www.linkedin.com" rel="noopener" target="_blank">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl">
<img alt="Design system" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shapes h-4 w-4 text-fuchsia-300" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
<h3 className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Design System</h3>
</div>
<p className="mt-1 text-xs text-white/70" style={{fontFamily: '\'Inter\''}}>Tokens and components for scale.</p>
</div>
</div>
<div className="p-4">
<div className="flex flex-wrap gap-2 text-[11px] text-white/70">
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">System Owner</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">CSS Vars</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">48 Components</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/75">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-zap h-3.5 w-3.5 mr-1 text-fuchsia-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>+35% ship</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-gauge h-3.5 w-3.5 mr-1 text-emerald-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>-38% bundle</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><i className="h-3.5 w-3.5 mr-1 text-sky-300" data-lucide="a11y"></i>AA score</div>
</div>
</div>
</a>
</article>

<article className="snap-start min-w-[85vw] sm:min-w-[460px] rounded-2xl border border-white/10 bg-white/[0.02] p-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<a className="block group" href="https://dribbble.com" rel="noopener" target="_blank">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl">
<img alt="Mobile app" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smartphone h-4 w-4 text-emerald-300" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<h3 className="text-lg tracking-tight text-white" style={{fontWeight: '600'}}>Mobile App</h3>
</div>
<p className="mt-1 text-xs text-white/70" style={{fontFamily: '\'Inter\''}}>From research to release.</p>
</div>
</div>
<div className="p-4">
<div className="flex flex-wrap gap-2 text-[11px] text-white/70">
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">Full‑stack</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">React Native</span>
<span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">Node</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/75">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-users h-3.5 w-3.5 mr-1 text-emerald-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>25k users</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-lock h-3.5 w-3.5 mr-1 text-amber-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>SSO</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2"><svg className="lucide lucide-star h-3.5 w-3.5 mr-1 text-sky-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>4.8 rating</div>
</div>
</div>
</a>
</article>
</div>
<div className="mt-12 border-t border-white/10"></div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-6 flex items-end justify-between">
<div className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white" style={{fontFamily: '\'Sora\', system-ui', fontWeight: '600', letterSpacing: '-0.02em'}}>Testimonials</h2>
<p className="text-white/70 text-sm sm:text-base" style={{fontFamily: '\'Inter\', system-ui'}}>Swipe, click arrows, or let it play automatically.</p>
</div>
<div className="flex items-center gap-2">
<button aria-label="Previous" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" id="testPrev">
<svg className="lucide lucide-arrow-left" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" id="testNext">
<svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2" id="testScroller">

<div className="snap-center min-w-[88vw] sm:min-w-[520px] reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-6" data-reveal="">
<div className="flex items-center gap-3">
<img alt="Ava" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white" style={{fontFamily: '\'Inter\'', fontWeight: '600'}}>Ava Martinez</p>
<p className="text-xs text-white/60" style={{fontFamily: '\'IBM Plex Mono\''}}>PM, SaaS</p>
</div>
</div>
<blockquote className="mt-4 text-white/80" style={{fontFamily: '\'DM Serif Display\', serif'}}>
              “A remarkable blend of product sense and engineering depth. Ship speed without sacrificing quality.”
            </blockquote>
</div>
<div className="snap-center min-w-[88vw] sm:min-w-[520px] reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-6" data-reveal="">
<div className="flex items-center gap-3">
<img alt="Noah" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white" style={{fontFamily: '\'Inter\'', fontWeight: '600'}}>Noah Patel</p>
<p className="text-xs text-white/60" style={{fontFamily: '\'IBM Plex Mono\''}}>Lead Engineer</p>
</div>
</div>
<blockquote className="mt-4 text-white/80" style={{fontFamily: '\'DM Serif Display\', serif'}}>
              “Sets a high bar for accessibility and performance. Our users felt the difference immediately.”
            </blockquote>
</div>
<div className="snap-center min-w-[88vw] sm:min-w-[520px] reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-6" data-reveal="">
<div className="flex items-center gap-3">
<img alt="Liam" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white" style={{fontFamily: '\'Inter\'', fontWeight: '600'}}>Liam Chen</p>
<p className="text-xs text-white/60" style={{fontFamily: '\'IBM Plex Mono\''}}>Design Lead</p>
</div>
</div>
<blockquote className="mt-4 text-white/80" style={{fontFamily: '\'DM Serif Display\', serif'}}>
              “A partner who anticipates edge cases and smooths rough UX edges. Highly recommended.”
            </blockquote>
</div>
</div>
<div className="mt-12 border-t border-white/10"></div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="connect" style={{fontFamily: '\'Inter\', system-ui'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white" style={{fontFamily: '\'Sora\', system-ui', fontWeight: '600', letterSpacing: '-0.02em'}}>Connect</h2>
<p className="text-white/70 text-sm sm:text-base">Let’s build something great together.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
<div className="lg:col-span-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-full" data-reveal="">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="contactForm">
<div className="sm:col-span-1">
<label className="mb-1 block text-xs text-white/70">Name</label>
<input className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs text-white/70">Email</label>
<input className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="you@email.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="mb-1 block text-xs text-white/70">Subject</label>
<input className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="Project idea or question" required="" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="mb-1 block text-xs text-white/70">Message</label>
<textarea className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell me a bit about your project" required="" rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
<div className="flex gap-2">
<a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" href="https://github.com" rel="noopener" target="_blank">
<svg className="lucide lucide-github" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" href="https://www.linkedin.com" rel="noopener" target="_blank">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" href="https://twitter.com" rel="noopener" target="_blank">
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" href="mailto:hello@example.com">
<svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
<button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-white text-black px-5 py-3 text-sm hover:bg-white/90 hover:outline hover:outline-2 hover:outline-white/10 transition shrink-0" style={{fontWeight: '600'}} type="submit">
<svg className="lucide lucide-send mr-2 h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Send Message
                </button>
</div>
</form>
</div>
<div className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-full" data-reveal="">
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin h-5 w-5 text-sky-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-base text-white" style={{fontWeight: '600'}}>Based</p>
</div>
<p className="mt-1 text-sm text-white/70">Remote • GMT±2</p>
<div className="mt-6 flex items-center gap-3">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80">
<svg className="lucide lucide-clock mr-2 h-4 w-4 text-emerald-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Replies in &lt; 24h
              </span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80">
<svg className="lucide lucide-languages mr-2 h-4 w-4 text-sky-300" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg> EN, ES
              </span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80">
<svg className="lucide lucide-briefcase mr-2 h-4 w-4 text-amber-300" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Accepting freelance
              </span>
</div>
<ul className="mt-6 space-y-3 text-sm text-white/80">
<li className="flex items-center">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] mr-3">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</span>
<a className="hover:underline" href="mailto:hello@example.com">hello@example.com</a>
</li>
<li className="flex items-center">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] mr-3">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</span>
<a className="hover:underline" href="https://cal.com" rel="noopener" target="_blank">Schedule a quick intro</a>
</li>
</ul>
<div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between mb-2">
<p className="text-sm text-white" style={{fontWeight: '600'}}>Availability</p>
<p className="text-xs text-white/60">70% booked</p>
</div>
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-2 w-[70%] rounded-full bg-emerald-500/80"></div>
</div>
<p className="mt-2 text-xs text-white/60">Next opening from Oct 10</p>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<a className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white hover:bg-white/[0.08] hover:outline hover:outline-1 hover:outline-white/10 transition" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" rel="noopener" target="_blank">
<svg className="lucide lucide-download mr-2 h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download CV
              </a>
<a className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2 text-sm hover:bg-white/90 hover:outline hover:outline-2 hover:outline-white/10 transition" href="mailto:hello@example.com?subject=Project%20Inquiry" style={{fontWeight: '600'}}>
<svg className="lucide lucide-send mr-2 h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Email Me
              </a>
</div>
</div>
</div>

<p className="mt-6 text-center text-xs text-white/50">I respect your time and privacy — no spam, ever.</p>
</div>
</section>

<footer className="relative border-t border-white/10 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<a className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-white/[0.06] hover:outline hover:outline-1 hover:outline-white/10 transition" href="#hero">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-white tracking-tight" style={{fontFamily: '\'Sora\'', fontWeight: '600'}}>M</div>
<span className="text-sm text-white/80" style={{fontFamily: '\'Sora\'', fontWeight: '600'}}>Modern Portfolio</span>
</a>
<nav className="flex items-center gap-3 text-xs text-white/70" style={{fontFamily: '\'Inter\''}}>
<a className="hover:text-white" href="#about">About</a>
<span className="text-white/30">•</span>
<a className="hover:text-white" href="#skills">Skills</a>
<span className="text-white/30">•</span>
<a className="hover:text-white" href="#projects">Projects</a>
<span className="text-white/30">•</span>
<a className="hover:text-white" href="#testimonials">Testimonials</a>
<span className="text-white/30">•</span>
<a className="hover:text-white" href="#connect">Connect</a>
</nav>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs text-white/50">© <span id="year">2025</span> Modern Developer. All rights reserved.</p>
<div className="flex items-center gap-2">
<a aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition" href="https://github.com" rel="noopener" target="_blank">
<svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition" href="https://www.linkedin.com" rel="noopener" target="_blank">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition" href="mailto:hello@example.com">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</div>

<button aria-label="Back to top" className="fixed bottom-6 right-6 z-40 hidden rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-md hover:bg-white/20 transition" id="toTop">
<svg className="lucide lucide-arrow-up h-5 w-5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</footer>



    </>
  );
}
