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



      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { style: "stroke-width:1.5;" } });
      });

      // Mobile menu toggle
      const menuToggle = document.getElementById('menuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuToggle.querySelector('[data-lucide]');
        if (icon) icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
        lucide.createIcons();
      });

      // Contact modal openers
      const openers = ['openModal', 'openModalMobile', 'openModalHero', 'openModalAbout', 'openModalCTA']
        .map(id => document.getElementById(id))
        .filter(Boolean);

      const contactModal = document.getElementById('contactModal');
      const closeModal = document.getElementById('closeModal');

      openers.forEach(btn => btn.addEventListener('click', () => {
        contactModal.classList.remove('hidden');
        contactModal.classList.add('flex');
      }));

      closeModal?.addEventListener('click', () => {
        contactModal.classList.add('hidden');
        contactModal.classList.remove('flex');
      });

      contactModal?.addEventListener('click', (e) => {
        if (e.target === contactModal) {
          contactModal.classList.add('hidden');
          contactModal.classList.remove('flex');
        }
      });

      // Accessibility modal
      const accessibilityBtn = document.getElementById('accessibilityBtn');
      const accessibilityBtnMobile = document.getElementById('accessibilityBtnMobile');
      const accessibilityModal = document.getElementById('accessibilityModal');
      const closeAccessibility = document.getElementById('closeAccessibility');
      const closeAccessibility2 = document.getElementById('closeAccessibility2');
      const applyAccessibility = document.getElementById('applyAccessibility');
      const reduceMotion = document.getElementById('reduceMotion');
      const highContrast = document.getElementById('highContrast');

      function openA11y() {
        accessibilityModal.classList.remove('hidden');
        accessibilityModal.classList.add('flex');
      }
      accessibilityBtn?.addEventListener('click', openA11y);
      accessibilityBtnMobile?.addEventListener('click', openA11y);

      function closeA11y() {
        accessibilityModal.classList.add('hidden');
        accessibilityModal.classList.remove('flex');
      }
      closeAccessibility?.addEventListener('click', closeA11y);
      closeAccessibility2?.addEventListener('click', closeA11y);
      accessibilityModal?.addEventListener('click', (e) => {
        if (e.target === accessibilityModal) closeA11y();
      });

      // Apply accessibility preferences
      applyAccessibility?.addEventListener('click', () => {
        document.documentElement.style.setProperty('scrollBehavior', reduceMotion.checked ? 'auto' : 'smooth');
        document.body.classList.toggle('contrast-[1.15]', highContrast.checked);
        closeA11y();
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
      

<header className="sticky top-0 z-50 border-b border-neutral-900/80 bg-neutral-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a aria-label="Eyekiller home" className="group inline-flex items-center gap-2" href="#">
<span className="inline-grid h-8 w-8 place-items-center rounded-md border border-neutral-800 bg-neutral-900 text-sm font-semibold tracking-tight transition-colors group-hover:border-neutral-700 group-hover:bg-neutral-800">EK</span>
<span className="hidden text-sm font-medium tracking-tight text-neutral-300 sm:inline-block">Eyekiller</span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-300/90 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-neutral-300/90 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-300/90 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-300/90 hover:text-white transition-colors" href="#blog">Blog</a>
<a className="relative text-sm text-neutral-300/90 hover:text-white transition-colors" href="#careers">
              Careers
              <span className="ml-2 inline-flex h-5 items-center justify-center rounded-full bg-emerald-500/15 px-2 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30">2</span>
</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<button className="inline-flex h-9 items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" id="accessibilityBtn" type="button">
<i className="h-4 w-4" data-lucide="accessibility" style={{strokeWidth: '1.5'}}></i>
<span>Accessibility</span>
</button>
<button className="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-500/10 px-3 text-xs font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" id="openModal" type="button">
<i className="h-4 w-4" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
<span>Let’s Talk</span>
</button>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" id="menuToggle" type="button">
<i className="h-5 w-5 text-neutral-300" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="hidden border-t border-neutral-900/80 bg-neutral-950 md:hidden" id="mobileMenu">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-2">
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition" href="#work">Work</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition" href="#services">Services</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition" href="#about">About</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition" href="#blog">Blog</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition" href="#careers">Careers</a>
<div className="mt-2 flex items-center gap-3 px-3">
<button className="inline-flex h-9 items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" id="accessibilityBtnMobile" type="button">
<i className="h-4 w-4" data-lucide="accessibility" style={{strokeWidth: '1.5'}}></i>
<span>Accessibility</span>
</button>
<button className="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-500/10 px-3 text-xs font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" id="openModalMobile" type="button">
<i className="h-4 w-4" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
<span>Let’s Talk</span>
</button>
</div>
</nav>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="grid items-center gap-10 lg:grid-cols-2">
<div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
              Exceptional <span className="text-emerald-300/90">Digital</span> Experiences
            </h1>
<p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300/90">
              Driving growth for leading brands and organisations through high‑performing websites and results‑driven digital marketing.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex h-10 items-center gap-2 rounded-md bg-white/5 px-4 text-sm font-medium text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition" href="#work">
<i className="h-4 w-4 text-emerald-300" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
                See our work
              </a>
<button className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-500/10 px-4 text-sm font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition" id="openModalHero">
<i className="h-4 w-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                Let’s talk
              </button>
</div>

<div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-3">
<div className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-xs text-neutral-300">
<i className="h-4 w-4 text-emerald-300" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
                Awwwards Nominee
              </div>
<div className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-xs text-neutral-300">
<i className="h-4 w-4 text-emerald-300" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
                5.0/5 Client Reviews
              </div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-4">
<img alt="Design collaboration" className="aspect-[4/3] w-full rounded-lg border border-neutral-800 object-cover shadow-lg shadow-black/20" src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Developer at work" className="aspect-[4/5] w-full translate-y-6 rounded-lg border border-neutral-800 object-cover shadow-lg shadow-black/20" src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Modern workstation" className="aspect-[4/5] w-full -translate-y-6 rounded-lg border border-neutral-800 object-cover shadow-lg shadow-black/20" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Product strategy session" className="aspect-[4/3] w-full rounded-lg border border-neutral-800 object-cover shadow-lg shadow-black/20" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<hr className="border-neutral-900"/>
</div>
</section>

<section aria-label="Trusted by">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
<p className="text-xs uppercase tracking-wider text-neutral-400">Trusted by</p>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">

<div className="grid h-16 place-items-center rounded-md border border-neutral-800 bg-neutral-900/40 text-sm font-medium tracking-tight text-neutral-300">GOH</div>
<div className="grid h-16 place-items-center rounded-md border border-neutral-800 bg-neutral-900/40 text-sm font-medium tracking-tight text-neutral-300">W5</div>
<div className="grid h-16 place-items-center rounded-md border border-neutral-800 bg-neutral-900/40 text-sm font-medium tracking-tight text-neutral-300">BBC</div>
<div className="grid h-16 place-items-center rounded-md border border-neutral-800 bg-neutral-900/40 text-sm font-medium tracking-tight text-neutral-300">ACNI</div>
<div className="grid h-16 place-items-center rounded-md border border-neutral-800 bg-neutral-900/40 text-sm font-medium tracking-tight text-neutral-300">GOT</div>
<div className="grid h-16 place-items-center rounded-md border border-neutral-800 bg-neutral-900/40 text-sm font-medium tracking-tight text-neutral-300">OJ</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<hr className="border-neutral-900"/>
</div>
</section>

<section className="scroll-mt-20" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Featured Work</h2>
<p className="mt-2 text-sm text-neutral-400">Selected projects delivering measurable impact.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" href="#work">
            View all
            <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="group block rounded-lg border border-neutral-800 bg-neutral-900/40 p-2 hover:bg-neutral-900/60 transition" href="#">
<div className="overflow-hidden rounded-md">
<img alt="Oliver Jeffers project" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="px-1 py-3">
<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-2 py-1 text-[10px] text-neutral-300 ring-1 ring-inset ring-neutral-700">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></i>
                Honorable Mention
              </div>
<h3 className="text-base font-semibold tracking-tight text-white">Oliver Jeffers</h3>
<p className="mt-1 text-sm text-neutral-400">Bringing world‑famous art and stories to life through vibrant design and creative content.</p>
</div>
</a>

<a className="group block rounded-lg border border-neutral-800 bg-neutral-900/40 p-2 hover:bg-neutral-900/60 transition" href="#">
<div className="overflow-hidden rounded-md">
<img alt="Mahlatini project" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-1 py-3">
<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300 ring-1 ring-inset ring-emerald-500/30">
<i className="h-3.5 w-3.5" data-lucide="trophy" style={{strokeWidth: '1.5'}}></i>
                Awwwards Nominee
              </div>
<h3 className="text-base font-semibold tracking-tight text-white">Mahlatini</h3>
<p className="mt-1 text-sm text-neutral-400">Transforming a luxury travel brand with premium design and intelligent UX.</p>
</div>
</a>

<a className="group block rounded-lg border border-neutral-800 bg-neutral-900/40 p-2 hover:bg-neutral-900/60 transition" href="#">
<div className="overflow-hidden rounded-md">
<img alt="Grand Opera House project" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-1 py-3">
<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-2 py-1 text-[10px] text-neutral-300 ring-1 ring-inset ring-neutral-700">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
                114% More Users Converted
              </div>
<h3 className="text-base font-semibold tracking-tight text-white">Grand Opera House</h3>
<p className="mt-1 text-sm text-neutral-400">Standout UX with flexible design and powerful ticketing integration.</p>
</div>
</a>
</div>
<div className="mt-8 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" href="#work">
            View all
            <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<hr className="border-neutral-900"/>
</div>
</section>

<section className="scroll-mt-20" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">See why our clients love us</h2>
<p className="mt-2 text-sm text-neutral-400">Getting the details right. Keeping promises. Going the extra mile.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" href="#testimonials">
            Read reviews
            <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
<div className="mb-3 flex items-center gap-1">
<i className="h-4 w-4 text-emerald-300" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm text-neutral-300">“The team were fantastic to work with and the final product went beyond expectation. Our new website is a joy to use and feedback has been brilliant.”</p>
<div className="mt-4 text-xs text-neutral-400">
<strong className="font-medium text-neutral-200">Jen Rae</strong> — Grand Opera House
            </div>
</article>
<article className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
<div className="mb-3 flex items-center gap-1">
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-300">“Visionary design, technical excellence and stellar project management. A dedicated team we wholeheartedly recommend.”</p>
<div className="mt-4 text-xs text-neutral-400">
<strong className="font-medium text-neutral-200">Liane Goldring</strong> — Mahlatini
            </div>
</article>
<article className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
<div className="mb-3 flex items-center gap-1">
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
<i className="h-4 w-4 text-emerald-300" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-300">“Experts in their field. Our customer‑focused website puts visitors at the centre of our experience. A pleasure to work with.”</p>
<div className="mt-4 text-xs text-neutral-400">
<strong className="font-medium text-neutral-200">Ann Graham</strong> — W5
            </div>
</article>
</div>
<div className="mt-8 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" href="#testimonials">
            Read reviews
            <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<hr className="border-neutral-900"/>
</div>
</section>

<section className="scroll-mt-20" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Helping you transform your business</h2>
<p className="mt-2 text-sm text-neutral-400">Bold ideas. Smarter strategies. Game‑changing results.</p>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-3">

<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-neutral-800/60 px-2 py-1 text-[11px] text-neutral-300 ring-1 ring-inset ring-neutral-700">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="palette" style={{strokeWidth: '1.5'}}></i>
              Design
            </div>
<p className="text-sm text-neutral-300">Stunning, user‑friendly websites that engage visitors, build trust, and convert.</p>
<ul className="mt-4 grid gap-1 text-sm text-neutral-400">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Discovery</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Web Design</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>UX Design</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Accessible Design</li>
</ul>
</div>

<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-neutral-800/60 px-2 py-1 text-[11px] text-neutral-300 ring-1 ring-inset ring-neutral-700">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="code-2" style={{strokeWidth: '1.5'}}></i>
              Build
            </div>
<p className="text-sm text-neutral-300">High‑performing, scalable solutions that work seamlessly for your goals.</p>
<ul className="mt-4 grid gap-1 text-sm text-neutral-400">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Website Development</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Craft CMS</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Shopify</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Technical SEO</li>
</ul>
</div>

<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-neutral-800/60 px-2 py-1 text-[11px] text-neutral-300 ring-1 ring-inset ring-neutral-700">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
              Grow
            </div>
<p className="text-sm text-neutral-300">Attract, engage, and convert customers with data‑driven marketing.</p>
<ul className="mt-4 grid gap-1 text-sm text-neutral-400">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Paid Advertising (PPC)</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>SEO</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Content Strategy</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Social Media</li>
</ul>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<hr className="border-neutral-900"/>
</div>
</section>

<section className="scroll-mt-20" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid items-center gap-8 lg:grid-cols-2">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Your trusted digital partner</h2>
<p className="mt-4 text-sm leading-relaxed text-neutral-300">
              We design, build, and grow digital products for ambitious teams across the UK, Ireland, North America and beyond. Since 2003, we’ve transformed global brands with innovative design, scalable engineering, and purposeful marketing.
            </p>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white">22+</div>
<div className="mt-1 text-[11px] uppercase tracking-wider text-neutral-400">Years</div>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white">5.0</div>
<div className="mt-1 text-[11px] uppercase tracking-wider text-neutral-400">Rating</div>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white">100+</div>
<div className="mt-1 text-[11px] uppercase tracking-wider text-neutral-400">Projects</div>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex h-10 items-center gap-2 rounded-md bg-white/5 px-4 text-sm font-medium text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition" href="#contact">
<i className="h-4 w-4 text-emerald-300" data-lucide="handshake" style={{strokeWidth: '1.5'}}></i>
                About us
              </a>
<button className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-500/10 px-4 text-sm font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition" id="openModalAbout">
<i className="h-4 w-4" data-lucide="messages-square" style={{strokeWidth: '1.5'}}></i>
                Start a project
              </button>
</div>
</div>
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<img alt="Team collaboration" className="aspect-[4/3] w-full rounded-lg border border-neutral-800 object-cover shadow-lg shadow-black/20" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Creative session" className="aspect-[4/5] w-full translate-y-6 rounded-lg border border-neutral-800 object-cover shadow-lg shadow-black/20" src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<hr className="border-neutral-900"/>
</div>
</section>

<section className="scroll-mt-20" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8">
<div className="grid items-center gap-8 sm:grid-cols-3">
<div className="sm:col-span-2">
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Let’s work together</h3>
<p className="mt-2 text-sm text-neutral-400">Tell us about your goals. We’ll bring the strategy, design and engineering.</p>
<div className="mt-4 grid gap-3 sm:flex sm:flex-wrap">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" href="tel:+442891462888">
<i className="h-4 w-4" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
                  +44 (0)28 9146 2888
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition" href="mailto:hello@eyekiller.com">
<i className="h-4 w-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
                  hello@eyekiller.com
                </a>
</div>
</div>
<div className="sm:col-span-1">
<button className="w-full inline-flex h-10 items-center justify-center gap-2 rounded-md bg-emerald-500/10 px-4 text-sm font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition" id="openModalCTA">
<i className="h-4 w-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                Start the conversation
              </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div>
<div className="inline-flex items-center gap-2">
<span className="inline-grid h-8 w-8 place-items-center rounded-md border border-neutral-800 bg-neutral-900 text-sm font-semibold tracking-tight">EK</span>
<span className="text-sm font-medium tracking-tight text-neutral-300">Eyekiller</span>
</div>
<p className="mt-3 text-sm text-neutral-400">Creating exceptional digital experiences since 2003.</p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Explore</h4>
<ul className="mt-3 grid gap-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition" href="#work">Work</a></li>
<li><a className="hover:text-white transition" href="#services">Services</a></li>
<li><a className="hover:text-white transition" href="#about">About</a></li>
<li><a className="hover:text-white transition" href="#blog">Blog</a></li>
<li><a className="hover:text-white transition" href="#careers">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Say Hello</h4>
<ul className="mt-3 grid gap-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition" href="tel:+442891462888">+44 (0)28 9146 2888</a></li>
<li><a className="hover:text-white transition" href="mailto:hello@eyekiller.com">hello@eyekiller.com</a></li>
</ul>
<div className="mt-3 flex items-center gap-3">
<a aria-label="X" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" href="#">
<i className="h-4 w-4 text-neutral-300" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" href="#">
<i className="h-4 w-4 text-neutral-300" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
<a aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" href="#">
<i className="h-4 w-4 text-neutral-300" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Newsletter</h4>
<p className="mt-3 text-sm text-neutral-400">Get insights on UX, engineering and growth—no spam.</p>
<form className="mt-4 grid gap-2" onsubmit="event.preventDefault(); alert('Thanks for subscribing!');">
<label className="sr-only" htmlFor="email">Email</label>
<input className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 hover:border-neutral-700 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/30 transition" id="email" placeholder="you@company.com" required="" type="email"/>
<label className="inline-flex items-center gap-2 text-xs text-neutral-300">
<span className="relative inline-flex h-4 w-7 items-center rounded-full bg-neutral-800 transition">
<input className="peer sr-only" type="checkbox"/>
<span className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-neutral-400 transition peer-checked:translate-x-3.5 peer-checked:bg-emerald-300"></span>
</span>
                I agree to receive updates.
              </label>
<button className="mt-1 inline-flex h-9 items-center justify-center gap-2 rounded-md bg-emerald-500/10 px-3 text-xs font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition">
<i className="h-4 w-4" data-lucide="mail-plus" style={{strokeWidth: '1.5'}}></i>
                Subscribe
              </button>
</form>
</div>
</div>
<div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-900 pt-6">
<p className="text-xs text-neutral-500">© 2025 Eyekiller Ltd • Company Reg NI045770</p>
<div className="flex flex-wrap items-center gap-4 text-xs">
<a className="text-neutral-400 hover:text-white transition" href="#">Accessibility</a>
<a className="text-neutral-400 hover:text-white transition" href="#">Privacy</a>
<a className="text-neutral-400 hover:text-white transition" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-4" id="accessibilityModal">
<div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-950 p-6 shadow-lg">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Accessibility Preferences</h3>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" id="closeAccessibility">
<i className="h-4 w-4 text-neutral-300" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<p className="mt-2 text-sm text-neutral-400">Control motion and contrast to suit your preferences.</p>
<div className="mt-5 grid gap-3">
<label className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<span className="text-sm text-neutral-300">Reduce motion</span>
<input className="peer sr-only" id="reduceMotion" type="checkbox"/>
<span className="relative inline-flex h-5 w-10 items-center rounded-full bg-neutral-800 transition">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-400 transition peer-checked:translate-x-5 peer-checked:bg-emerald-300"></span>
</span>
</label>
<label className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<span className="text-sm text-neutral-300">High contrast</span>
<input className="peer sr-only" id="highContrast" type="checkbox"/>
<span className="relative inline-flex h-5 w-10 items-center rounded-full bg-neutral-800 transition">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-400 transition peer-checked:translate-x-5 peer-checked:bg-emerald-300"></span>
</span>
</label>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="inline-flex h-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 px-3 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 transition" id="closeAccessibility2">Close</button>
<button className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-emerald-500/10 px-3 text-xs font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition" id="applyAccessibility">
<i className="h-4 w-4" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
            Save
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-4" id="contactModal">
<div className="w-full max-w-2xl rounded-xl border border-neutral-800 bg-neutral-950 p-0 shadow-2xl">
<div className="flex items-center justify-between border-b border-neutral-900 p-4">
<div className="flex items-center gap-2">
<span className="inline-grid h-7 w-7 place-items-center rounded-md border border-neutral-800 bg-neutral-900 text-[11px] font-semibold tracking-tight">EK</span>
<h3 className="text-base font-semibold tracking-tight text-white">Let’s Work Together</h3>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" id="closeModal">
<i className="h-4 w-4 text-neutral-300" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="grid gap-6 p-4 sm:p-6 lg:p-8 lg:grid-cols-5">
<div className="lg:col-span-3">
<form className="grid gap-4" id="contactForm" onsubmit="event.preventDefault(); document.getElementById('contactSuccess').classList.remove('hidden'); this.classList.add('hidden');">
<div>
<label className="mb-1 block text-xs font-medium text-neutral-300" htmlFor="name">Full Name</label>
<input className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 hover:border-neutral-700 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/30 transition" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="mb-1 block text-xs font-medium text-neutral-300" htmlFor="email2">Email Address</label>
<input className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 hover:border-neutral-700 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/30 transition" id="email2" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-neutral-300" htmlFor="phone">Phone (Optional)</label>
<input className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 hover:border-neutral-700 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/30 transition" id="phone" placeholder="+44 ..." type="tel"/>
</div>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-neutral-300" htmlFor="how">How can we help?</label>
<textarea className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none hover:border-neutral-700 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/30 transition" id="how" placeholder="Tell us a little about your project..." required="" rows="4"></textarea>
</div>
<label className="inline-flex items-center gap-2 text-xs text-neutral-300">
<span className="relative inline-flex h-5 w-10 items-center rounded-full bg-neutral-800 transition">
<input className="peer sr-only" type="checkbox"/>
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-400 transition peer-checked:translate-x-5 peer-checked:bg-emerald-300"></span>
</span>
                Subscribe for occasional updates
              </label>
<div className="flex items-center justify-between">
<p className="text-[11px] text-neutral-500">By sending, you agree to our <a className="text-neutral-300 underline-offset-4 hover:underline" href="#">Privacy Policy</a>.</p>
<button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-emerald-500/10 px-4 text-sm font-semibold tracking-tight text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 transition">
<i className="h-4 w-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                  Send Message
                </button>
</div>
</form>
<div className="hidden rounded-md border border-emerald-700/30 bg-emerald-500/10 p-4 text-sm text-emerald-200" id="contactSuccess">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="mail-check" style={{strokeWidth: '1.5'}}></i>
<span>Thank you — your message has been sent. We’ll get back to you shortly.</span>
</div>
</div>
</div>
<div className="lg:col-span-2">
<div className="grid gap-4">
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4">
<h4 className="text-sm font-semibold tracking-tight text-white">Say Hello</h4>
<div className="mt-3 grid gap-2 text-sm text-neutral-300">
<a className="inline-flex items-center gap-2 hover:text-white transition" href="tel:+442891462888">
<i className="h-4 w-4" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
                    +44 (0)28 9146 2888
                  </a>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="mailto:hello@eyekiller.com">
<i className="h-4 w-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
                    hello@eyekiller.com
                  </a>
</div>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4">
<h4 className="text-sm font-semibold tracking-tight text-white">Quick Links</h4>
<ul className="mt-3 grid gap-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition" href="#work">See our work</a></li>
<li><a className="hover:text-white transition" href="#services">What we do</a></li>
<li><a className="hover:text-white transition" href="#testimonials">Client reviews</a></li>
</ul>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4">
<h4 className="text-sm font-semibold tracking-tight text-white">Follow</h4>
<div className="mt-3 flex items-center gap-3">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" href="#">
<i className="h-4 w-4 text-neutral-300" data-lucide="twitter"></i>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" href="#">
<i className="h-4 w-4 text-neutral-300" data-lucide="instagram"></i>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition" href="#">
<i className="h-4 w-4 text-neutral-300" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
