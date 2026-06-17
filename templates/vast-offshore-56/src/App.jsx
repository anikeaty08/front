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



      // Helpers
      const qs = (s, el = document) => el.querySelector(s);
      const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));

      // Initialize after DOM ready
      window.addEventListener('DOMContentLoaded', () => {
        // Icons
        if (window.lucide) lucide.createIcons();

        // Year
        const yearEl = qs('#year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Mobile menu
        const mobileBtn = qs('#mobileMenuBtn');
        const mobileMenu = qs('#mobileMenu');
        mobileBtn?.addEventListener('click', () => {
          mobileMenu?.classList.toggle('hidden');
        });

        // Smooth scroll for in-page links (non-service routes)
        qsa('a[href^="#"]').forEach(a => {
          a.addEventListener('click', (e) => {
            const hash = a.getAttribute('href');
            if (!hash) return;
            // Service routes handled by router
            if (hash.startsWith('#service-')) return;

            // Close mobile menu on nav tap
            if (!mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
            }

            // Let browser handle if navigating between pages
            const target = qs(hash);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', hash);
            }
          });
        });

        // Section active underline (ScrollSpy)
        const navLinks = qsa('a[data-nav]');
        const underlineSpans = qsa('[data-active-underline]');

        const setActiveNav = (id) => {
          navLinks.forEach(link => {
            const span = qs('[data-active-underline]', link);
            if (link.dataset.nav === id) {
              link.classList.add('text-white');
              span?.classList.add('bg-[#E3B341]');
              span?.classList.remove('bg-transparent');
            } else {
              link.classList.remove('text-white');
              span?.classList.remove('bg-[#E3B341]');
              span?.classList.add('bg-transparent');
            }
          });
        };

        const homeShell = qs('#home-shell');
        const observeSections = () => {
          const sections = qsa('main [data-section]');
          const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                if (id) setActiveNav(id);
              }
            });
          }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
          sections.forEach(s => io.observe(s));
        };

        // SPA-style routing for service pages
        const servicePages = qsa('.service-page');
        const route = () => {
          const hash = window.location.hash;
          const isService = hash.startsWith('#service-');
          // Hide/show shells
          if (isService) {
            homeShell.classList.add('hidden');
            servicePages.forEach(sec => {
              if ('#' + sec.id === hash) {
                sec.classList.remove('hidden');
                // fade in
                requestAnimationFrame(() => {
                  sec.classList.remove('opacity-0');
                  sec.classList.add('opacity-100');
                });
              } else {
                sec.classList.add('hidden');
                sec.classList.add('opacity-0');
                sec.classList.remove('opacity-100');
              }
            });
            setActiveNav('services');
            window.scrollTo({ top: 0, behavior: 'instant' });
          } else {
            // Show home shell
            servicePages.forEach(sec => {
              sec.classList.add('hidden');
              sec.classList.add('opacity-0');
              sec.classList.remove('opacity-100');
            });
            homeShell.classList.remove('hidden');
            // Reset ScrollSpy only on home
            observeSections();
          }
          // Refresh icons (if DOM changed)
          if (window.lucide) lucide.createIcons();
        };
        window.addEventListener('hashchange', route);
        route();

        // Contact modal
        const contactModal = qs('#contactModal');
        const modalOverlay = contactModal ? contactModal.firstElementChild : null;
        const modalPanel = contactModal ? contactModal.children[1] : null;
        const openBtns = qsa('[data-open-contact]');
        const closeBtn = qs('#closeContactModal');

        const openModal = () => {
          if (!contactModal || !modalOverlay || !modalPanel) return;
          contactModal.classList.remove('hidden');
          document.body.classList.add('overflow-hidden');
          // Animate in
          requestAnimationFrame(() => {
            modalOverlay.classList.remove('opacity-0');
            modalOverlay.classList.add('opacity-100');
            modalPanel.classList.remove('opacity-0', 'translate-y-8');
            modalPanel.classList.add('opacity-100', 'translate-y-0');
            // Focus first field
            const firstInput = qs('#q-name');
            firstInput?.focus();
          });
        };

        const closeModal = () => {
          if (!contactModal || !modalOverlay || !modalPanel) return;
          modalOverlay.classList.add('opacity-0');
          modalOverlay.classList.remove('opacity-100');
          modalPanel.classList.add('opacity-0', 'translate-y-8');
          modalPanel.classList.remove('opacity-100', 'translate-y-0');
          setTimeout(() => {
            contactModal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
          }, 180);
        };

        openBtns.forEach(btn => btn.addEventListener('click', openModal));
        modalOverlay?.addEventListener('click', closeModal);
        closeBtn?.addEventListener('click', closeModal);
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) closeModal();
        });

        // Quick form submission (demo)
        const quickForm = qs('#contactQuickForm');
        const quickSuccess = qs('#q-success');
        quickForm?.addEventListener('submit', (e) => {
          e.preventDefault();
          // simple validation: consent
          const consent = qs('#q-consent');
          if (consent && !consent.checked) {
            consent.focus();
            consent.classList.add('ring-2','ring-red-500/50');
            setTimeout(() => consent.classList.remove('ring-2','ring-red-500/50'), 700);
            return;
          }
          quickSuccess?.classList.remove('hidden');
          setTimeout(closeModal, 900);
        });

        // Improve focus style for keyboard users
        function handleFirstTab(e) {
          if (e.key === 'Tab') {
            document.body.classList.add('outline-none');
            window.removeEventListener('keydown', handleFirstTab);
          }
        }
        window.addEventListener('keydown', handleFirstTab);
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
      

<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#home">
<div className="flex h-8 w-8 items-center justify-center rounded bg-[#E3B341] text-[#1A1A1A] font-semibold tracking-tight">V</div>
<span className="text-lg font-semibold tracking-tight">VAST</span>
<span className="hidden text-zinc-400/80 sm:inline">Sourcing Talents</span>
</a>
<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition relative" data-nav="home" href="#home">
              Home
              <span className="absolute inset-x-2 -bottom-[11px] h-[3px] rounded bg-transparent transition" data-active-underline=""></span>
</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition relative" data-nav="about" href="#about">
              About
              <span className="absolute inset-x-2 -bottom-[11px] h-[3px] rounded bg-transparent transition" data-active-underline=""></span>
</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition relative" data-nav="services" href="#services">
              Services
              <span className="absolute inset-x-2 -bottom-[11px] h-[3px] rounded bg-transparent transition" data-active-underline=""></span>
</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition relative" data-nav="process" href="#process">
              Process
              <span className="absolute inset-x-2 -bottom-[11px] h-[3px] rounded bg-transparent transition" data-active-underline=""></span>
</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition relative" data-nav="contact" href="#contact">
              Contact
              <span className="absolute inset-x-2 -bottom-[11px] h-[3px] rounded bg-transparent transition" data-active-underline=""></span>
</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-4 py-2 text-sm font-semibold text-[#1A1A1A] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f0c75a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B341]/60" data-open-contact="">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Build Your Team
            </button>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobileMenu">
<nav className="flex flex-col py-2">
<a className="px-2 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded" href="#home">Home</a>
<a className="px-2 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded" href="#about">About</a>
<a className="px-2 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded" href="#services">Services</a>
<a className="px-2 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded" href="#process">Process</a>
<a className="px-2 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded" href="#contact">Contact</a>
</nav>
</div>
</div>
</header>
<main className="pt-16" id="home-shell">

<section className="relative" data-section="" id="home">
<div className="relative isolate min-h-[92vh] overflow-hidden bg-[#2E2E2E]">

<div className="pointer-events-none absolute -left-10 top-24 h-24 w-72 rotate-6 border-t border-[#E3B341]/40"></div>
<div className="pointer-events-none absolute right-10 top-44 h-24 w-72 -rotate-6 border-t border-white/10"></div>
<div className="pointer-events-none absolute bottom-24 left-1/2 h-24 w-96 -translate-x-1/2 border-t border-white/10"></div>
<div className="mx-auto max-w-7xl px-6">
<div className="relative grid min-h-[92vh] grid-cols-1 items-center gap-10 py-24 md:grid-cols-2">
<div className="space-y-8">
<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
<i className="h-4 w-4 text-[#E3B341]" data-lucide="shield-check"></i>
                  World-class offshore staffing
                </p>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                  Build a world‑class offshore team with speed, clarity, and control.
                </h1>
<p className="max-w-xl text-base md:text-lg text-zinc-200/90">
                  VAST sources, vets, and manages elite virtual assistants and specialists so you scale operations without compromise.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-3">
<button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#E3B341] px-5 py-3 text-sm md:text-base font-semibold text-[#1A1A1A] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f0c75a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B341]/60" data-open-contact="">
<i className="w-5 h-5" data-lucide="rocket"></i>
                    Start Now
                  </button>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/15 bg-white/0 px-5 py-3 text-sm md:text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20" href="#services">
<i className="w-5 h-5" data-lucide="grid"></i>
                    Explore Services
                  </a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-2xl border border-white/10"></div>
<div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
<img alt="Global remote team at work" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1650&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,179,65,0.25),transparent_55%)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" data-section="" id="about">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">VAST is your offshore operations edge.</h2>
<div className="space-y-4 text-zinc-300">
<p className="text-base">
                  We source, vet, and embed high-caliber assistants and specialists aligned to your workflows, culture, and goals.
                </p>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4 text-[#E3B341]" data-lucide="search-check"></i>
<span className="font-medium">Rigorous sourcing</span>
</div>
<p className="text-sm text-zinc-400">Multi-stage screening with skills, stack, and scenario testing.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4 text-[#E3B341]" data-lucide="workflow"></i>
<span className="font-medium">Operational fit</span>
</div>
<p className="text-sm text-zinc-400">We integrate into your tools, SOPs, and rhythms from day one.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4 text-[#E3B341]" data-lucide="shield"></i>
<span className="font-medium">Governance</span>
</div>
<p className="text-sm text-zinc-400">Clear SLAs, secure access, and measurable outcomes.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4 text-[#E3B341]" data-lucide="gauge"></i>
<span className="font-medium">Speed to impact</span>
</div>
<p className="text-sm text-zinc-400">Role-ready shortlists within days, not weeks.</p>
</div>
</div>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/0 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/5" href="#process">
<i className="w-4 h-4" data-lucide="timeline"></i>
                  See our process
                </a>
</div>
</div>
<div className="relative">
<div className="rounded-xl border border-white/10 bg-white/5 p-1">
<div className="relative overflow-hidden rounded-lg">
<img alt="Operations dashboard" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B0B0B]/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 rounded bg-black/40 px-3 py-2 text-xs text-zinc-200 backdrop-blur">
<span className="font-medium">Aligned to your stack</span> — ClickUp, Notion, HubSpot, GSuite, and more.
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" data-section="" id="services">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="flex items-end justify-between">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services built to ship outcomes.</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition" href="#contact">
              Talk to us
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

<a className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-white/20" data-route="" href="#service-accountant">
<div className="absolute inset-x-0 top-0 h-1.5" style={{backgroundColor: '#10B981'}}></div>
<div className="flex items-start justify-between">
<div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="calculator" style={{color: '#10B981'}}></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">ACCOUNTANT</h3>
<p className="mt-2 text-sm text-zinc-300">Clarity in books. Control in decisions.</p>
</div>
<button className="mt-1 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-medium transition" style={{borderColor: 'rgba(16,185,129,0.35)', color: '#10B981'}}>
                  Learn More
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-6 h-28 overflow-hidden rounded-lg border border-white/10">
<img alt="Accounting support" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-white/20" data-route="" href="#service-startups">
<div className="absolute inset-x-0 top-0 h-1.5" style={{backgroundColor: '#3B82F6'}}></div>
<div className="flex items-start justify-between">
<div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="zap" style={{color: '#3B82F6'}}></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">STARTUPS</h3>
<p className="mt-2 text-sm text-zinc-300">Velocity with discipline. Scale without drag.</p>
</div>
<button className="mt-1 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-medium transition" style={{borderColor: 'rgba(59,130,246,0.35)', color: '#3B82F6'}}>
                  Learn More
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-6 h-28 overflow-hidden rounded-lg border border-white/10">
<img alt="Startup operations" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-white/20" data-route="" href="#service-admin">
<div className="absolute inset-x-0 top-0 h-1.5" style={{backgroundColor: '#F59E0B'}}></div>
<div className="flex items-start justify-between">
<div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="inbox" style={{color: '#F59E0B'}}></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">ADMIN SUPPORT</h3>
<p className="mt-2 text-sm text-zinc-300">Order, cadence, and dependable output.</p>
</div>
<button className="mt-1 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-medium transition" style={{borderColor: 'rgba(245,158,11,0.35)', color: '#F59E0B'}}>
                  Learn More
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-6 h-28 overflow-hidden rounded-lg border border-white/10">
<img alt="Admin support" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-white/20" data-route="" href="#service-marketing">
<div className="absolute inset-x-0 top-0 h-1.5" style={{backgroundColor: '#F43F5E'}}></div>
<div className="flex items-start justify-between">
<div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="megaphone" style={{color: '#F43F5E'}}></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">MARKETING SUPPORT</h3>
<p className="mt-2 text-sm text-zinc-300">Visibility, energy, and creative impact.</p>
</div>
<button className="mt-1 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-medium transition" style={{borderColor: 'rgba(244,63,94,0.35)', color: '#F43F5E'}}>
                  Learn More
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-6 h-28 overflow-hidden rounded-lg border border-white/10">
<img alt="Marketing support" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</a>
</div>
</div>
</section>

<section className="relative" data-section="" id="process">
<div className="mx-auto max-w-7xl px-6 py-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our process, built for precision.</h2>
<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">

<div className="relative rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}>
<span className="text-sm font-semibold text-[#E3B341]">1</span>
</div>
<h3 className="text-lg font-semibold tracking-tight">Scope</h3>
<p className="mt-2 text-sm text-zinc-300">We map your objectives, tools, SLAs, and success metrics.</p>
</div>

<div className="relative rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}>
<span className="text-sm font-semibold text-[#E3B341]">2</span>
</div>
<h3 className="text-lg font-semibold tracking-tight">Source</h3>
<p className="mt-2 text-sm text-zinc-300">Targeted talent search, skill tests, and scenario exercises.</p>
</div>

<div className="relative rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}>
<span className="text-sm font-semibold text-[#E3B341]">3</span>
</div>
<h3 className="text-lg font-semibold tracking-tight">Select</h3>
<p className="mt-2 text-sm text-zinc-300">Shortlisted profiles, work samples, and culture alignment.</p>
</div>

<div className="relative rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}>
<span className="text-sm font-semibold text-[#E3B341]">4</span>
</div>
<h3 className="text-lg font-semibold tracking-tight">Support</h3>
<p className="mt-2 text-sm text-zinc-300">Onboarding, governance, and ongoing performance management.</p>
</div>
</div>
</div>
</section>

<section className="relative" data-section="" id="contact">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
<div className="md:col-span-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to build your team?</h2>
<p className="mt-3 text-zinc-300">Tell us what you need. We’ll return with a clear plan and a fast path to deploy.</p>
<div className="mt-6 flex items-center gap-3 text-sm text-zinc-400">
<i className="h-4 w-4 text-[#E3B341]" data-lucide="mail"></i>
                hello@vast.team
              </div>
<div className="mt-2 flex items-center gap-3 text-sm text-zinc-400">
<i className="h-4 w-4 text-[#E3B341]" data-lucide="clock"></i>
                Response within 24 hours
              </div>
</div>
<div className="md:col-span-3">
<form className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-sm text-zinc-300">Full name</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" placeholder="Jane Smith" type="text"/>
</div>
<div>
<label className="mb-2 block text-sm text-zinc-300">Work email</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="mb-2 block text-sm text-zinc-300">Company</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" placeholder="Company Inc." type="text"/>
</div>
<div>
<label className="mb-2 block text-sm text-zinc-300">Role</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" placeholder="Operations Lead" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-sm text-zinc-300">What do you need?</label>
<textarea className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" placeholder="Share goals, tools, timelines." rows="4"></textarea>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-xs text-zinc-500">We’ll never share your information.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:bg-[#f0c75a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B341]/60" data-open-contact="" type="button">
<i className="h-4 w-4" data-lucide="send"></i>
                    Get Started
                  </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-[#E3B341] text-[#1A1A1A] font-semibold tracking-tight">V</div>
<div className="text-sm text-zinc-400">VAST — Sourcing Talents</div>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#process">Process</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</div>
<div className="text-xs text-zinc-500">© <span id="year"></span> VAST. All rights reserved.</div>
</div>
</div>
</footer>
</main>


<section className="service-page hidden opacity-0" id="service-accountant">
<div className="pt-16">

<div className="bg-[#10B981] text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-white/80">Service</p>
<h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Accountant Support</h1>
<p className="mt-3 max-w-2xl text-base text-white/90">Trust, clarity, and control across books, reporting, and compliance—delivered with precision.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/0 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" href="#services">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                  Back to Services
                </a>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-[#f0c75a] transition" data-open-contact="">
                  Book Your VA
                  <i className="h-4 w-4" data-lucide="calendar"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 py-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What’s included</h2>
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="book-open" style={{color: '#10B981'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">General Ledger</h3>
<p className="mt-2 text-sm text-zinc-300">Daily bookkeeping, reconciliations, AR/AP, month-end close.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="bar-chart-2" style={{color: '#10B981'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Reporting</h3>
<p className="mt-2 text-sm text-zinc-300">P&amp;L, balance sheet, cash flow, variance analysis, dashboards.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="shield-check" style={{color: '#10B981'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Compliance</h3>
<p className="mt-2 text-sm text-zinc-300">Tax prep support, audit readiness, and policy governance.</p>
</div>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Why it matters</h3>
<p className="mt-3 text-sm text-zinc-300">Real-time visibility into financial health. Confident decisions. Zero surprises.</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#10B981'}}></i> Clean, current books</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#10B981'}}></i> Faster closes and reporting</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#10B981'}}></i> Better cash and runway control</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Tools &amp; stack</h3>
<p className="mt-3 text-sm text-zinc-300">QuickBooks, Xero, NetSuite, Excel/Sheets, and BI tooling.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Xero</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">QuickBooks</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">NetSuite</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Power BI</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Sheets</span>
</div>
</div>
</div>

<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight">Delivery process</h3>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">1</span></div>
<div className="text-sm font-medium">Requirements</div>
<div className="text-xs text-zinc-400">Chart of accounts, cadence, controls.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">2</span></div>
<div className="text-sm font-medium">Sourcing</div>
<div className="text-xs text-zinc-400">Technical and scenario tests.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">3</span></div>
<div className="text-sm font-medium">Onboarding</div>
<div className="text-xs text-zinc-400">Access, SOPs, milestones.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">4</span></div>
<div className="text-sm font-medium">Performance</div>
<div className="text-xs text-zinc-400">KPIs, reviews, improvements.</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
<div>
<h4 className="text-lg font-semibold tracking-tight">Get clean, decision-ready finance.</h4>
<p className="text-sm text-zinc-300">We’ll match you with an accountant tuned to your stack.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:bg-[#f0c75a]" data-open-contact="">
              Get Started
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="service-page hidden opacity-0" id="service-startups">
<div className="pt-16">
<div className="bg-[#3B82F6] text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-white/80">Service</p>
<h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Startup Operations</h1>
<p className="mt-3 max-w-2xl text-base text-white/90">Speed, flexibility, and disciplined execution across your stack.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/0 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" href="#services">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                  Back to Services
                </a>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-[#f0c75a] transition" data-open-contact="">
                  Build Your Team
                  <i className="h-4 w-4" data-lucide="rocket"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 py-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What’s included</h2>
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="kanban" style={{color: '#3B82F6'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Ops &amp; PM</h3>
<p className="mt-2 text-sm text-zinc-300">Backlog, sprints, QA, and product ops aligned to milestones.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="message-square" style={{color: '#3B82F6'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">CX &amp; Support</h3>
<p className="mt-2 text-sm text-zinc-300">Multi-channel support, SLAs, help centers, and retention.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="bar-chart" style={{color: '#3B82F6'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">RevOps</h3>
<p className="mt-2 text-sm text-zinc-300">CRM hygiene, automation, attribution, and pipeline integrity.</p>
</div>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Why it matters</h3>
<p className="mt-3 text-sm text-zinc-300">Move fast without chaos. Ship more with fewer blockers.</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#3B82F6'}}></i> Clear execution rhythms</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#3B82F6'}}></i> Fewer context switches</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#3B82F6'}}></i> Reliable delivery at pace</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Toolchain</h3>
<p className="mt-3 text-sm text-zinc-300">HubSpot, Salesforce, Intercom, Notion, ClickUp, Jira, Linear.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">HubSpot</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Salesforce</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Intercom</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Jira</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Notion</span>
</div>
</div>
</div>

<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight">Delivery process</h3>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">1</span></div>
<div className="text-sm font-medium">Scope &amp; KPIs</div>
<div className="text-xs text-zinc-400">Define goals and constraints.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">2</span></div>
<div className="text-sm font-medium">Sourcing</div>
<div className="text-xs text-zinc-400">Role-ready shortlist in days.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">3</span></div>
<div className="text-sm font-medium">Onboarding</div>
<div className="text-xs text-zinc-400">Access, SOPs, runways.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">4</span></div>
<div className="text-sm font-medium">Scale</div>
<div className="text-xs text-zinc-400">Iterate and extend capacity.</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
<div>
<h4 className="text-lg font-semibold tracking-tight">Deploy a startup-ready squad.</h4>
<p className="text-sm text-zinc-300">We’ll assemble flexible, cross-functional support fast.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:bg-[#f0c75a]" data-open-contact="">
              Build Your Team
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="service-page hidden opacity-0" id="service-admin">
<div className="pt-16">
<div className="bg-[#F59E0B] text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-white/80">Service</p>
<h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Admin Support</h1>
<p className="mt-3 max-w-2xl text-base text-white/90">Order, structure, and dependability baked into your day-to-day.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/0 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" href="#services">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                  Back to Services
                </a>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-[#f0c75a] transition" data-open-contact="">
                  Book Your VA
                  <i className="h-4 w-4" data-lucide="calendar"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 py-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What’s included</h2>
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="calendar-check" style={{color: '#F59E0B'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Scheduling</h3>
<p className="mt-2 text-sm text-zinc-300">Calendars, travel, vendor coordination, and logistics.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="files" style={{color: '#F59E0B'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Documentation</h3>
<p className="mt-2 text-sm text-zinc-300">SOPs, knowledge bases, and internal comms.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="list-checks" style={{color: '#F59E0B'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Tasking</h3>
<p className="mt-2 text-sm text-zinc-300">Inbox triage, follow-ups, and project coordination.</p>
</div>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Why it matters</h3>
<p className="mt-3 text-sm text-zinc-300">Free your calendar for deep work. Keep operations tight.</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#F59E0B'}}></i> Predictable schedules</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#F59E0B'}}></i> Clear ownership</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#F59E0B'}}></i> Frictionless handoffs</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Toolchain</h3>
<p className="mt-3 text-sm text-zinc-300">Google Workspace, Microsoft 365, Notion, ClickUp, Slack.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">GSuite</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">M365</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Slack</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">ClickUp</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Notion</span>
</div>
</div>
</div>

<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight">Delivery process</h3>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">1</span></div>
<div className="text-sm font-medium">Intake</div>
<div className="text-xs text-zinc-400">Rhythms, tools, priorities.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">2</span></div>
<div className="text-sm font-medium">Sourcing</div>
<div className="text-xs text-zinc-400">Ops-minded assistants.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">3</span></div>
<div className="text-sm font-medium">Embed</div>
<div className="text-xs text-zinc-400">SOPs and playbooks.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">4</span></div>
<div className="text-sm font-medium">Optimize</div>
<div className="text-xs text-zinc-400">Continuous improvement.</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
<div>
<h4 className="text-lg font-semibold tracking-tight">Make admin effortless.</h4>
<p className="text-sm text-zinc-300">Dependable support that keeps your day moving.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:bg-[#f0c75a]" data-open-contact="">
              Book Your VA
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="service-page hidden opacity-0" id="service-marketing">
<div className="pt-16">
<div className="bg-[#F43F5E] text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-white/80">Service</p>
<h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Marketing Support</h1>
<p className="mt-3 max-w-2xl text-base text-white/90">Visibility, energy, and impact—content, campaigns, and ops working as one.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/0 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" href="#services">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                  Back to Services
                </a>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-[#f0c75a] transition" data-open-contact="">
                  Get Started
                  <i className="h-4 w-4" data-lucide="megaphone"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 py-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What’s included</h2>
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="pen-tool" style={{color: '#F43F5E'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Content</h3>
<p className="mt-2 text-sm text-zinc-300">Copy, visuals, and assets across lifecycle touchpoints.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="target" style={{color: '#F43F5E'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Campaigns</h3>
<p className="mt-2 text-sm text-zinc-300">Email, paid, ABM, and partnerships with clear KPIs.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="settings-2" style={{color: '#F43F5E'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Marketing Ops</h3>
<p className="mt-2 text-sm text-zinc-300">Automation, lead flow, attribution, and QA.</p>
</div>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Why it matters</h3>
<p className="mt-3 text-sm text-zinc-300">Consistent pipeline. Cohesive brand. Clear insights.</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#F43F5E'}}></i> Always-on content engine</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#F43F5E'}}></i> Measurable campaign ROI</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4" data-lucide="check" style={{color: '#F43F5E'}}></i> Clean ops and reliable data</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Toolchain</h3>
<p className="mt-3 text-sm text-zinc-300">HubSpot, Webflow, GA4, Meta/Google Ads, Figma, Canva.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">HubSpot</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Webflow</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">GA4</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Google Ads</span>
<span className="rounded border border-white/10 bg-white/5 px-2 py-1">Figma</span>
</div>
</div>
</div>

<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight">Delivery process</h3>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">1</span></div>
<div className="text-sm font-medium">Brief</div>
<div className="text-xs text-zinc-400">Goals, audiences, channels.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">2</span></div>
<div className="text-sm font-medium">Build</div>
<div className="text-xs text-zinc-400">Assets, automation, QA.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">3</span></div>
<div className="text-sm font-medium">Launch</div>
<div className="text-xs text-zinc-400">Go-live and monitoring.</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(227,179,65,0.15)'}}><span className="text-xs font-semibold text-[#E3B341]">4</span></div>
<div className="text-sm font-medium">Optimize</div>
<div className="text-xs text-zinc-400">Insights and iterations.</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
<div>
<h4 className="text-lg font-semibold tracking-tight">Turn attention into revenue.</h4>
<p className="text-sm text-zinc-300">Plug in a marketing engine built to perform.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:bg-[#f0c75a]" data-open-contact="">
              Get Started
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[60] hidden items-end justify-center md:items-center" id="contactModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur opacity-0 transition-opacity"></div>
<div aria-labelledby="contactTitle" aria-modal="true" className="relative w-full max-w-lg translate-y-8 rounded-xl border border-white/10 bg-[#121212] p-6 opacity-0 shadow-xl transition md:translate-y-...8" role="dialog">
<button aria-label="Close dialog" className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white" id="closeContactModal" type="button">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
<div className="space-y-4">
<div className="inline-flex items-center gap-2">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#E3B341] text-[#1A1A1A]">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
<p className="text-xs font-medium uppercase tracking-wider text-zinc-400">Get started</p>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight" id="contactTitle">Build your offshore team</h3>
<p className="text-sm text-zinc-400">Share a few details and we’ll reach out within 24 hours with next steps.</p>
<form className="space-y-4" id="contactQuickForm">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-sm text-zinc-300" htmlFor="q-name">Full name</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" id="q-name" placeholder="Jane Smith" required="" type="text"/>
</div>
<div>
<label className="mb-2 block text-sm text-zinc-300" htmlFor="q-email">Work email</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" id="q-email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div>
<label className="mb-2 block text-sm text-zinc-300" htmlFor="q-company">Company</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" id="q-company" placeholder="Company Inc." type="text"/>
</div>
<div>
<label className="mb-2 block text-sm text-zinc-300" htmlFor="q-service">Service</label>
<select className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" id="q-service">
<option className="bg-[#121212]" value="Accountant">Accountant</option>
<option className="bg-[#121212]" value="Startups">Startups</option>
<option className="bg-[#121212]" value="Admin Support">Admin Support</option>
<option className="bg-[#121212]" value="Marketing Support">Marketing Support</option>
<option className="bg-[#121212]" value="Other">Other</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-sm text-zinc-300" htmlFor="q-notes">What do you need?</label>
<textarea className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#E3B341]/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]/30" id="q-notes" placeholder="Share goals, tools, timelines." rows="4"></textarea>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<label className="inline-flex items-start gap-2 text-xs text-zinc-400">
<input className="mt-0.5 h-4 w-4 rounded border-white/10 bg-white/5 text-[#E3B341] focus:ring-[#E3B341]/40" id="q-consent" type="checkbox"/>
                I agree to be contacted by VAST and understand my data will be handled securely.
              </label>
<button className="inline-flex items-center gap-2 rounded-md bg-[#E3B341] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:bg-[#f0c75a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B341]/60" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                Send
              </button>
</div>
<p className="hidden rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300" id="q-success">
<span className="font-medium">Thanks!</span> We’ll follow up within 24 hours.
            </p>
</form>
</div>
</div>
</div>




    </>
  );
}
