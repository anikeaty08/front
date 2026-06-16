import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Mobile menu toggle
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        let open = false;
        btn?.addEventListener('click', () => {
          open = !open;
          if (open) {
            menu.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-[-8px]');
            menu.classList.add('pointer-events-auto', 'opacity-100', 'translate-y-0');
            btn.innerHTML = '<i data-lucide="x" class="h-5 w-5 text-slate-800"></i>';
          } else {
            menu.classList.add('pointer-events-none', 'opacity-0', 'translate-y-[-8px]');
            menu.classList.remove('pointer-events-auto', 'opacity-100', 'translate-y-0');
            btn.innerHTML = '<i data-lucide="menu" class="h-5 w-5 text-slate-800"></i>';
          }
          lucide.createIcons();
        });

        // Subtle parallax for hero layers
        const bg = document.getElementById('bgImage');
        const fogNear = document.getElementById('fogNear');
        const fogFar = document.getElementById('fogFar');
        const parallax = () => {
          const y = window.scrollY || window.pageYOffset;
          if (bg) bg.style.transform = `translateY(${y * 0.12}px) scale(1.06)`;
          if (fogFar) fogFar.style.transform = `translateY(${y * 0.18}px)`;
          if (fogNear) fogNear.style.transform = `translateY(${y * 0.28}px)`;
        };
        parallax();
        window.addEventListener('scroll', parallax, { passive: true });

        // Pricing toggle
        const toggle = document.getElementById('billingToggle');
        const priceEls = document.querySelectorAll('.price-amount');
        const yearlyNotes = document.querySelectorAll('.yearly-note');
        let billing = 'monthly';

        const setBilling = (mode) => {
          billing = mode;
          priceEls.forEach((el) => {
            const val = el.dataset[mode];
            if (val) el.textContent = val;
          });
          yearlyNotes.forEach((note) => {
            if (mode === 'yearly') note.classList.remove('hidden');
            else note.classList.add('hidden');
          });
          // Update toggle button styles
          toggle?.querySelectorAll('button').forEach((btn) => {
            const active = btn.getAttribute('data-bill') === mode;
            btn.classList.toggle('bg-slate-900', active);
            btn.classList.toggle('text-white', active);
            btn.classList.toggle('text-slate-700', !active);
          });
        };

        toggle?.addEventListener('click', (e) => {
          const target = e.target.closest('button[data-bill]');
          if (!target) return;
          setBilling(target.getAttribute('data-bill'));
        });

        setBilling('monthly');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 ring-1 ring-slate-200/60 backdrop-blur">
<svg className="lucide lucide-mountain h-5 w-5 text-slate-700" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</span>
<span className="text-xl tracking-tight font-semibold text-slate-800">Montane</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="relative text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#">
<span>Group</span>
<span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-slate-700/70 rounded-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="#">Trading</a>
<a className="hover:text-slate-900 transition text-sm font-medium text-slate-600" href="#">Capital</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="#">Maritime</a>
<a className="hover:text-slate-900 transition text-sm font-medium text-slate-600" href="#">Energy</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="relative inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900" href="#">
<svg className="lucide lucide-newspaper h-4 w-4" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
<span>News</span>
<span className="ml-1 inline-flex items-center justify-center h-5 min-w-[1.25rem] px-1.5 rounded-full bg-slate-800 text-white text-[10px] font-medium">12</span>
</a>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition" id="contactCta">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span>Contact</span>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-full p-2.5 bg-white/70 ring-1 ring-slate-200/70 backdrop-blur hover:bg-white transition" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-slate-800" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden pointer-events-none opacity-0 translate-y-[-8px] transition-all duration-200" id="mobileMenu" style={{display: 'none'}}>
<div className="mx-4 rounded-2xl bg-white/90 ring-1 ring-slate-200/70 backdrop-blur shadow-lg">
<div className="px-5 py-4 grid gap-3">
<a className="flex items-center justify-between py-2 text-sm font-medium text-slate-700" href="#">
              Group <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between py-2 text-sm font-medium text-slate-700" href="#">
              Trading <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between py-2 text-sm font-medium text-slate-700" href="#">
              Capital <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between py-2 text-sm font-medium text-slate-700" href="#">
              Maritime <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between py-2 text-sm font-medium text-slate-700" href="#">
              Energy <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<div className="pt-2 border-t border-slate-200/70">
<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3.5 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition" href="#">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Contact
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="min-h-[640px] overflow-hidden h-[92vh] relative">

<img alt="Snowy mountains in clouds" className="will-change-transform w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-105" data-element-id="aura-emg11wb65" id="bgImage" onload="
(function() {
  // Load GSAP
  if (!window.gsap) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = initAnimation;
    document.head.appendChild(script);
  } else {
    initAnimation();
  }

  function initAnimation() {
    // Create welcome text element
    const welcomeText = document.createElement('div');
    welcomeText.innerHTML = 'WELCOME';
    welcomeText.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4rem;
      font-weight: 700;
      color: white;
      letter-spacing: 0.5rem;
      z-index: 10;
      opacity: 0;
      text-shadow: 0 4px 20px rgba(0,0,0,0.3);
      font-family: Inter, sans-serif;
      pointer-events: none;
    `;
    
    // Add to parent container
    const heroSection = this.closest('section');
    if (heroSection) {
      heroSection.appendChild(welcomeText);
    }

    // GSAP Timeline for loading animation
    const tl = gsap.timeline();
    
    // Background image scale and fade
    tl.from(this, {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      ease: 'power2.out'
    })
    // Welcome text fade in with slow motion
    .to(welcomeText, {
      opacity: 1,
      duration: 3,
      ease: 'power2.out',
      delay: 0.5
    })
    // Welcome text stays visible then fades out
    .to(welcomeText, {
      opacity: 0,
      duration: 2,
      ease: 'power2.inOut',
      delay: 2
    });

    // Add subtle parallax enhancement
    gsap.registerPlugin &amp;&amp; gsap.registerPlugin(ScrollTrigger) || 
    (window.ScrollTrigger &amp;&amp; gsap.registerPlugin(ScrollTrigger));
    
    if (window.ScrollTrigger) {
      gsap.to(this, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }
})()
" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{transform: 'translateY(57.408px) scale(1.06)'}}/>

<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80"></div>

</section>

<section className="relative py-20 sm:py-28" id="divisions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Divisions</h2>
<p className="text-slate-700 mt-3">
            Focused verticals, unified standards. Each division operates with independent expertise and shared governance.
          </p>
</div>
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:shadow-lg transition" href="#">
<div className="relative h-40 overflow-hidden">
<img alt="Trading" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-slate-900/0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-activity h-4 w-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-xl tracking-tight font-semibold">Trading</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
                Global physical and derivatives execution with risk systems built for volatile markets.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Learn more <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:shadow-lg transition" href="#">
<div className="relative h-40 overflow-hidden">
<img alt="Capital" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-slate-900/0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-banknote h-4 w-4" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<h3 className="text-xl tracking-tight font-semibold">Capital</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
                Structured solutions and asset-backed strategies aligned to real-economy performance.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Learn more <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:shadow-lg transition" href="#">
<div className="relative h-40 overflow-hidden">
<img alt="Maritime" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-slate-900/0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-ship h-4 w-4" data-lucide="ship" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<h3 className="text-xl tracking-tight font-semibold">Maritime</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
                Fleet management and chartering with real-time operational telemetry.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Learn more <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:shadow-lg transition" href="#">
<div className="relative h-40 overflow-hidden">
<img alt="Energy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-slate-900/0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-flame h-4 w-4" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
<h3 className="text-xl tracking-tight font-semibold">Energy</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
                Supply, logistics, and low-carbon pathways across power and fuels.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Learn more <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:shadow-lg transition sm:col-span-2 lg:col-span-1" href="#">
<div className="relative h-40 overflow-hidden">
<img alt="Research" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-slate-900/50 to-slate-900/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-line-chart h-4 w-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<h3 className="text-xl tracking-tight font-semibold">Research</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
                Macro and micro insights powered by proprietary data pipelines.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Learn more <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative py-20 sm:py-28" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Operating System for Real Assets</h2>
<p className="mt-4 text-slate-700">
              Our platform integrates risk, treasury, logistics, and market intelligence into a single decision layer.
              Designed for transparency, audited for resilience.
            </p>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-lg tracking-tight font-semibold">Governance</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
                  Policy-driven controls across counterparties, liquidity, and compliance.
                </p>
</div>
<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-radar h-5 w-5" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
<h3 className="text-lg tracking-tight font-semibold">Telemetry</h3>
</div>
<p className="text-sm text-slate-600 mt-2">
                  Real-time signals from vessels, terminals, and markets inform execution.
                </p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<div className="absolute -inset-2 bg-gradient-to-tr from-slate-200/50 to-white/50 blur-xl rounded-3xl"></div>
<div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200">
<img alt="Mountain range aerial" className="w-full h-[380px] object-cover" src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-slate-200 backdrop-blur">
<svg className="lucide lucide-compass h-4 w-4 text-slate-800" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-medium text-slate-800">Operational View</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1.5">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="text-xs font-medium">Preview</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Latest</h2>
<p className="mt-3 text-slate-700">Updates from our teams and partners.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50" href="#">
            View all <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<article className="group rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white hover:shadow-lg transition">
<div className="relative h-40">
<img alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
</div>
<div className="p-5">
<div className="inline-flex items-center gap-2 text-xs text-slate-600">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Mar 12, 2025</span>
</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold text-slate-900">
                Q1 market perspectives across power and freight
              </h3>
<p className="mt-2 text-sm text-slate-600">
                Signals shaping spreads and utilization as liquidity normalizes.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Read <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
<article className="group rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white hover:shadow-lg transition">
<div className="relative h-40">
<img alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
</div>
<div className="p-5">
<div className="inline-flex items-center gap-2 text-xs text-slate-600">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">Feb 28, 2025</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mt-2">
                New risk APIs for counterparties and voyage ops
              </h3>
<p className="mt-2 text-sm text-slate-600">
                Faster onboarding and continuous monitoring via standardized data flows.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Read <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
<article className="group rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white hover:shadow-lg transition">
<div className="relative h-40">
<img alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
</div>
<div className="p-5">
<div className="inline-flex items-center gap-2 text-xs text-slate-600">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Jan 19, 2025</span>
</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold text-slate-900">
                Renewables desk expands cross-border capabilities
              </h3>
<p className="mt-2 text-sm text-slate-600">
                Enhanced access to guarantees of origin and congestion hedging.
              </p>
<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                Read <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-20 sm:py-28" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Pricing</h2>
<p className="mt-3 text-slate-700">Predictable plans for teams that move fast, with governance built in.</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<div className="inline-flex items-center gap-2 text-xs text-slate-600">
<span className="hidden sm:inline">Billing</span>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-white ring-1 ring-slate-200 p-1" id="billingToggle">
<button className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-900 text-white focus:outline-none focus-visible:outline-none" data-bill="monthly">Monthly</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:outline-none" data-bill="yearly">Yearly</button>
</div>
</div>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="relative rounded-2xl ring-1 ring-slate-200 bg-white p-6 hover:shadow-lg transition">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Standard</h3>
<p className="mt-1 text-sm text-slate-600">For small teams piloting workflows.</p>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$</span>
<span className="price-amount text-4xl font-semibold tracking-tight text-slate-900" data-monthly="49" data-yearly="39">49</span>
<span className="text-sm font-medium text-slate-600">/mo</span>
</div>
<div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 rounded-full px-2 py-1 yearly-note hidden">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Save 20% yearly</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                3 workspaces, 10 seats
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Real-time dashboards
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Basic API access
              </li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<svg className="lucide lucide-minus h-4.5 w-4.5 mt-0.5" data-lucide="minus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
                No dedicated SLA
              </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white ring-1 ring-slate-200 px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50" href="#">
                Get started
              </a>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-slate-200 bg-white p-6 hover:shadow-lg transition">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Professional</h3>
<p className="mt-1 text-sm text-slate-600">Advanced features for growing teams.</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-white px-2 py-1 text-[11px] font-medium">
<svg className="lucide lucide-star h-3.5 w-3.5" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                Popular
              </span>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$</span>
<span className="price-amount text-4xl font-semibold tracking-tight text-slate-900" data-monthly="149" data-yearly="119">149</span>
<span className="text-sm font-medium text-slate-600">/mo</span>
</div>
<div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 rounded-full px-2 py-1 yearly-note hidden">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Save 20% yearly</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited workspaces, 50 seats
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Advanced analytics &amp; alerts
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Full API + webhooks
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Priority support (24h)
              </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800" href="#">
                Start trial
              </a>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-slate-200 bg-white p-6 hover:shadow-lg transition">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Enterprise</h3>
<p className="mt-1 text-sm text-slate-600">Controls, scale, and support for critical ops.</p>
</div>
</div>
<div className="mt-6">
<div className="text-4xl font-semibold tracking-tight text-slate-900">Custom</div>
<p className="mt-1 text-sm text-slate-600">Tailored to volume and compliance needs.</p>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                SSO/SAML, audit trails, and policy gates
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Dedicated VPC &amp; data residency
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Premium SLA (99.9%) &amp; on-call access
              </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4.5 w-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                White-glove onboarding
              </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white ring-1 ring-slate-200 px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50" href="#">
                Contact sales
              </a>
</div>
</div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-3">
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
<svg className="lucide lucide-shield-check h-4 w-4 text-slate-800" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
            SOC 2 Type II, ISO 27001
          </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
<svg className="lucide lucide-zap h-4 w-4 text-slate-800" data-lucide="zap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
            99.9% uptime, global edge
          </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
<svg className="lucide lucide-git-branch h-4 w-4 text-slate-800" data-lucide="git-branch" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</span>
            Flexible APIs and webhooks
          </div>
</div>
</div>
</section>

<section className="relative py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative p-8 sm:p-12">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 gap-x-6 gap-y-6">
<div className="">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Partner with Montane</h3>
<p className="mt-2 text-slate-200">
                  Build with a platform engineered for certainty.
                </p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-100 transition" href="#">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                  Get in touch
                </a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  Company deck
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-slate-200/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
<svg className="lucide lucide-mountain h-5 w-5" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Montane</p>
<p className="text-xs text-slate-600">Built for clarity</p>
</div>
</div>
<div className="flex items-center gap-5 text-sm text-slate-600">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Careers</a>
</div>
</div>
<div className="mt-6 text-xs text-slate-500">
          © 2025 Montane Group. All rights reserved.
        </div>
</div>
</footer>


    </>
  );
}
